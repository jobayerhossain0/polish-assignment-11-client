import { Link } from "react-router-dom";

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden  border">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {artifact_type}
          </div>
        </div>

        <div className="mt-4 ">
          {artifact_image && (
            <div className="flex-shrink-0 h-32 w-32 mr-4 overflow-hidden rounded-lg bg-gray-100">
              <img
                className="h-full w-full object-cover"
                src={artifact_image}
                alt={artifact_name}
              />
            </div>
          )}
          <div>
            <h1 className="mt-3 text-2xl font-bold text-gray-900">
              {artifact_name}
            </h1>
            <p className=" text-gray-600 line-clamp-3 font-medium">{historical_context}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Discovery
            </h3>
            <p className="mt-1 text-xs text-gray-900">
              <span className="font-medium">Date:</span> {discovered_At}
              <br />
              <span className="font-medium">By:</span> {discovered_by}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Current Location
            </h3>
            <p className="mt-1 text-xs text-gray-900">{present_location}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Creation
            </h3>
            <p className="mt-1 text-xs text-gray-900">{created_At}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Added By
            </h3>
            <p className="mt-1 text-xs text-gray-900">
              {artifact_adder_name}
              <br />
              <a
                href={`mailto:${artifact_adder_email}`}
                className="text-indigo-600 hover:text-indigo-500"
              >
                {artifact_adder_email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link to={`/artifact/${_id}`}>
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
