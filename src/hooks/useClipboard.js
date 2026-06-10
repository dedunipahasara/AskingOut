import toast from "react-hot-toast";

const useClipboard = () => {
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(
        text
      );

      toast.success(
        "❤️ Copied Successfully"
      );
    } catch {
      toast.error(
        "❌ Copy Failed"
      );
    }
  };

  return { copy };
};

export default useClipboard;