import ApiService from "./apiService";

describe("ApiService", () => {
  describe("test Crud Api Methods", () => {
    it("should return user data on success response", () => {
      const mockSuccessResponse = {
        _id: "5dfcd44e83a3c2006df9533b",
        name: "John Kite",
        __v: 0,
        redeemHistory: [],
        createDate: "2019-12-20T14:01:50.938Z"
      };

      const mockJsonResponse = Promise.resolve(mockSuccessResponse);
      const mockFetchResponse = Promise.resolve({
        json: () => mockJsonResponse
      });

      jest.spyOn(global, "fetch").mockImplementation(() => mockFetchResponse);

      return ApiService.get("user/me").then(response => {
        expect(response).toMatchObject(mockSuccessResponse);
      });
    });

    it("should update points in user profile", () => {
      const body = {
        amount: 5000
      };

      return ApiService.post("user/points", body).then(response => {
        expect(response.message).toEqual("Points Updated");
      });
    });

    it("should not update points if amount is not valid", () => {
      const body = {
        amount: 2000
      };

      return ApiService.post("user/points", body).then(response => {
        expect(response.error).toEqual("Enter a Valid Amount.");
      });
    });

    it("should return products array", () => {
      const body = {
        amount: 2000
      };

      return ApiService.post("user/points", body).then(response => {
        expect(response.error).toEqual("Enter a Valid Amount.");
      });
    });
  });
});
