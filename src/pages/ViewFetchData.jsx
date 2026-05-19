import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { getUsers } from "../services/apiService.js";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import EmptyState from "../components/common/EmptyState";
export const ViewFetchData = () => {
  // Passing API function
  const { data, loading, error, fetchData } = useFetch(getUsers);
useEffect(() => {
  fetchData();
}, []);
  return (
    <div
      className="
        min-h-screen
        bg-zinc-950
        text-white
        p-10
      "
    >
      {/* <button
        onClick={fetchData}
        className="
          px-5
          py-3
          rounded-2xl
          bg-cyan-500
        "
      >
        Fetch Users
      </button> */}

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!data && !loading && (
        <EmptyState
          title="
            Click button to fetch data
          "
        />
      )}

      {data && <pre className="mt-10">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
