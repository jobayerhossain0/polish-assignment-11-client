import { Button, Label, Select, TextInput } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const visaData = {
      ...data,
      adder_name: user.name,
      adder_email: user.email,
    };

    fetch("https://artifact-tyx9.onrender.com/artifacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          toast.success("Artifact added successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Artifact | Add Artifact</title>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Add New Artifact
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Contribute to our historical collection
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-10 space-y-8"
          >
            {/* Artifact Image */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="artifact_image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Artifact Image URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    {...register("artifact_image")}
                    type="url"
                    id="artifact_image"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Provide a direct link to the artifact image
                </p>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="artifact_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Artifact Name*
                </label>
                <div className="mt-1">
                  <input
                    {...register("artifact_name")}
                    type="text"
                    id="artifact_name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g., Rosetta Stone"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="artifact_type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Artifact Type*
                </label>
                <div className="mt-1">
                  <select
                    {...register("artifact_type")}
                    id="artifact_type"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select a type</option>
                    <option value="Tools">Tools</option>
                    <option value="Weapons">Weapons</option>
                    <option value="Documents">Documents</option>
                    <option value="Writings">Writings</option>
                    <option value="Art">Art</option>
                    <option value="Jewelry">Jewelry</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Historical Context */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="historical_context"
                  className="block text-sm font-medium text-gray-700"
                >
                  Historical Context*
                </label>
                <div className="mt-1">
                  <textarea
                    {...register("historical_context")}
                    id="historical_context"
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Describe the historical significance of this artifact"
                    required
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  What makes this artifact historically important?
                </p>
              </div>
            </div>

            {/* Timeline Information */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="created_At"
                  className="block text-sm font-medium text-gray-700"
                >
                  Creation Date/Period*
                </label>
                <div className="mt-1">
                  <input
                    {...register("created_At")}
                    type="text"
                    id="created_At"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g., 196 BC or Bronze Age"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="discovered_At"
                  className="block text-sm font-medium text-gray-700"
                >
                  Discovery Date*
                </label>
                <div className="mt-1">
                  <input
                    {...register("discovered_At")}
                    type="text"
                    id="discovered_At"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g., 1799 or 15th Century"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Discovery Information */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="discovered_by"
                  className="block text-sm font-medium text-gray-700"
                >
                  Discovered By*
                </label>
                <div className="mt-1">
                  <input
                    {...register("discovered_by")}
                    type="text"
                    id="discovered_by"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Name of discoverer or team"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="present_location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Location*
                </label>
                <div className="mt-1">
                  <input
                    {...register("present_location")}
                    type="text"
                    id="present_location"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g., British Museum, London"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contributor Information */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="artifact_adder_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name*
                </label>
                <div className="mt-1">
                  <input
                    {...register("artifact_adder_name")}
                    type="text"
                    id="artifact_adder_name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your full name"
                    defaultValue={user?.displayName}
                    required
                    disabled
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="artifact_adder_email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email*
                </label>
                <div className="mt-1">
                  <input
                    {...register("artifact_adder_email")}
                    type="email"
                    id="artifact_adder_email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="your@email.com"
                    defaultValue={user?.email}
                    required
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Artifact
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddArtifact;
