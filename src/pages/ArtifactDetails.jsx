import { Button } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ArtifactDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [likedArtifact, setLikedArtifact] = useState(null);
  const [likeCount, setLikeCount] = useState(null);

  useEffect(() => {
    fetch(`https://artifact-tyx9.onrender.com/artifacts/liked/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setLikeCount(data));
  }, [likeCount]);

  useEffect(() => {
    fetch(`https://artifact-tyx9.onrender.com/artifacts/${id}`)
      .then((response) => response.json())
      .then((data) => setArtifact(data));
  }, []);

  const handleLikeArtifact = () => {
    const likedData = { artifact, liked_by: user?.email };

    fetch(`https://artifact-tyx9.onrender.com/artifacts/liked`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedData),
    })
      .then((response) => response.json())
      .then((data) => setLikedArtifact(data));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Artifact Image */}
        <div className="relative h-80 sm:h-96 bg-gray-100">
          {artifact?.artifact_image ? (
            <img
              src={artifact.artifact_image}
              alt={artifact.artifact_name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/800x500?text=Artifact+Image";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              <svg
                className="w-20 h-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Artifact Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {artifact?.artifact_name}
              </h1>
              <div className="mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {artifact?.artifact_type}
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <button
                onClick={handleLikeArtifact}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="font-medium">{likeCount?.length} Likes</span>
              </button>
            </div>
          </div>

          {/* Artifact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Creation</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {artifact?.created_At || "Unknown"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Discovery Date
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {artifact?.discovered_At || "Unknown"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Discovered By
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {artifact?.discovered_by || "Unknown"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Current Location
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {artifact?.present_location || "Unknown"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Added By</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {artifact?.artifact_adder_name}
                  {artifact?.artifact_adder_email && (
                    <span className="block text-sm text-gray-500">
                      {artifact.artifact_adder_email}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Historical Context */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Historical Context
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                {artifact?.historical_context ||
                  "No historical context provided."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtifactDetails;
