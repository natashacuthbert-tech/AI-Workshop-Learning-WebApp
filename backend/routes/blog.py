from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.blog import Blog
from backend.schemas.blog import BlogCreate

router = APIRouter(prefix="/blogs", tags=["Blogs"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_blog(blog: BlogCreate, db: Session = Depends(get_db)):
    new_blog = Blog(
        title=blog.title,
        content=blog.content,
        author=blog.author
    )

    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)

    return {
        "message": "Blog created successfully",
        "blog": {
            "id": new_blog.id,
            "title": new_blog.title,
            "content": new_blog.content,
            "author": new_blog.author
        }
    }


@router.get("/")
def get_blogs(db: Session = Depends(get_db)):
    blogs = db.query(Blog).all()

    return {
        "blogs": [
            {
                "id": blog.id,
                "title": blog.title,
                "content": blog.content,
                "author": blog.author
            }
            for blog in blogs
        ]
    }


@router.get("/{blog_id}")
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()

    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    return {
        "id": blog.id,
        "title": blog.title,
        "content": blog.content,
        "author": blog.author
    }