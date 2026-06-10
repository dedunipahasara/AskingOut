export const copyDateDetails = async (
  details
) => {
  try {
    await navigator.clipboard.writeText(
      details
    );

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};