import {useEffect, useState} from "react";

const useNavigationTree = (role) => {
  const [navigationTree, setNavigationTree] = useState(null);

  const loadNavigationJSON = async () => {
    try {
      const module = await import(
        `@/data/navigation/roles/${role}/navigation.json`
        );
      setNavigationTree(module.default);
    } catch (err) {
      console.error(`Failed to load navigation for role: ${role}`, err)
    }
  };

  useEffect(() => {

    if (role) {
      loadNavigationJSON();
    }
  }, [role]);

  return {navigationTree};
};

export default useNavigationTree;
