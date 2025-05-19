import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ArtifactCard from "../components/ArtifactCard";
import { AuthContext } from "../provider/AuthProvider";
import SliderCarousel from "../components/SliderCarousel";
import Features from "../components/Features";

const HomePage = () => {
  const [artifacts, setArtifacts] = useState(null);
  const { setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://artifact-tyx9.onrender.com/artifacts`)
      .then((response) => response.json())
      .then((data) => setArtifacts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Helmet>
        <title>Artifact | Home</title>
      </Helmet>

      <SliderCarousel />
      <Features />

      <div className="container my-20">
        <h2 className="text-center font-bold text-4xl mb-5">All Artifacts</h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
          {artifacts?.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
