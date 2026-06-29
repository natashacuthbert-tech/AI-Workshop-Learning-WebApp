import "./Gallery.css";

const speakers = [
  {
    id: 1,
    name: "Prof. Evans Kipchumba",
    role: "Keynote Speaker",
    organization: "JKUAT",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    topic: "AI Research in East Africa",
  },
  {
    id: 2,
    name: "Zawadi Omwamba",
    role: "Industry Expert",
    organization: "Safaricom PLC",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    topic: "Deploying AI at Scale",
  },
  {
    id: 3,
    name: "Dr. Tariq Amina",
    role: "Research Fellow",
    organization: "JHUB Africa",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    topic: "Large Language Models",
  },
  {
    id: 4,
    name: "Grace Wanjiku",
    role: "Data Scientist",
    organization: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    topic: "Machine Learning",
  },
  {
    id: 5,
    name: "James Otieno",
    role: "AI Engineer",
    organization: "Google",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    topic: "Generative AI",
  },
  {
    id: 6,
    name: "Faith Njeri",
    role: "Cybersecurity Expert",
    organization: "Cisco",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    topic: "AI Security",
  },
  {
    id: 7,
    name: "Brian Mwangi",
    role: "Cloud Architect",
    organization: "AWS",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    topic: "Cloud AI",
  },
  {
    id: 8,
    name: "Mary Atieno",
    role: "Software Engineer",
    organization: "IBM",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    topic: "AI Applications",
  },
];

function Gallery() {
  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <h1>Meet Our Speakers</h1>
        <p>
          Explore the experts, innovators, researchers and industry leaders
          who will share their knowledge during the AI Workshop.
        </p>
      </div>

      <div className="speaker-grid">
        {speakers.map((speaker) => (
          <div className="speaker-card" key={speaker.id}>
            <img src={speaker.image} alt={speaker.name} />

            <span className="badge">{speaker.role}</span>

            <h3>{speaker.name}</h3>

            <h4>{speaker.organization}</h4>

            <p>{speaker.topic}</p>

            <button>View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;