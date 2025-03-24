import { useEffect, useState } from "react";

const useNavigationTree = (role) => {
  const [navigationTree, setNavigationTree] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNavigationJSON = async () => {
      try {
        setLoading(true);
        const module = await import(
          `../../data/navigation/roles/${role}/navigation.json`
        );
        setNavigationTree(module.default);
      } catch (err) {
        console.error(`Failed to load navigation for role: ${role}`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (role) {
      loadNavigationJSON();
    }
  }, [role]);

  return { navigationTree, loading, error };
};

export default useNavigationTree;
