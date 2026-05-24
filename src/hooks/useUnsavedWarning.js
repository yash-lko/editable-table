import { useEffect } from "react";
const useUnsavedWarning = (editingId) => {

  useEffect(() => {
    const warnUser = (e) => {
      if (editingId !== null) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener(
      "beforeunload",
      warnUser
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        warnUser
      );
    };
  }, [editingId]);
};
export default useUnsavedWarning;