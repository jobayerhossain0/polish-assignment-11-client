import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaHistory,
  FaEnvelope,
} from "react-icons/fa";

const ArtifactCard = ({ artifact }) => {
  const {
    _id,
    artifact_adder_email,
    artifact_adder_name,
    artifact_image,
    artifact_name,
    artifact_type,
    created_At,
    discovered_At,
    discovered_by,
    historical_context,
    present_location,
  } = artifact;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 min-h-[710px] flex flex-col">
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={
            artifact_image ||
            "https://via.placeholder.com/400x300?text=Artifact+Image"
          }
          alt={artifact_name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x300?text=Artifact+Image";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6  basis-full flex flex-col">
        {/* Header with type and name */}
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
            {artifact_type}
          </span>
        </div>

        <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
          {artifact_name}
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
          {historical_context}
        </p>

        {/* Metadata Grid */}
        <div className="mt-6 grid grid-cols-1  gap-4">
          <div className="flex items-start">
            <FaHistory className="flex-shrink-0 mt-1 mr-2 text-indigo-500 dark:text-indigo-400" />
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Discovery
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                <span className="font-medium">{discovered_At}</span>
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  by {discovered_by}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-2 text-indigo-500 dark:text-indigo-400" />
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Current Location
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200 line-clamp-2">
                {present_location}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCalendarAlt className="flex-shrink-0 mt-1 mr-2 text-indigo-500 dark:text-indigo-400" />
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Creation Date
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                {created_At}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaUser className="flex-shrink-0 mt-1 mr-2 text-indigo-500 dark:text-indigo-400" />
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Added By
              </h3>
              <div className="mt-1 text-sm text-gray-900 dark:text-gray-200">
                <p>{artifact_adder_name}</p>
                <a
                  href={`mailto:${artifact_adder_email}`}
                  className="flex items-center text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <FaEnvelope className="mr-1" size={12} />
                  <span className="text-xs truncate">
                    {artifact_adder_email}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto flex justify-end">
          <Link
            to={`/artifact/${_id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 dark:bg-indigo-700 dark:hover:bg-indigo-600"
          >
            View Details
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
