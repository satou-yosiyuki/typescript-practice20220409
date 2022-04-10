export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === "ABC") {
    console.log("Function basic sample1: User is signed in! UserName is");
    return true;
  } else {
    console.log("Function basic sample2: User is not signed in");
    return false;
  }
};

export const isUserSignedIn2 = (
  userId: string,
  userName = "NO NAME"
): boolean => {
  if (userId === "ABC") {
    console.log("Function basic sample3: User is signed in! UserName is");
    return true;
  } else {
    console.log("Function basic sample4: User is not signed in");
    return false;
  }
};

// レストパラメーター
export const sumProductPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice;
  }, 0);
};
