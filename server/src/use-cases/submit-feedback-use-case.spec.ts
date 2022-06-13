import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//const createFeedbackSpy = jest.fn();
//const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase({
  create: async () => {},
  //create: createFeedbackSpy
  //sendMail: async () => {},
  //sendMail: sendMailSpy
});


describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "test.jpg",
      })
    ).resolves.not.toThrow();

    //expect(createFeedbackSpy).toHaveBeenCalled();
    //expect(sendMailSpy).toHaveBeenCalled();
  });
  it("should not be able to submit a feedback without type and comments", async () => {

    await expect(
      submitFeedback.execute({
        type: "",
        comment: "",
        screenshot: "",
      })
    ).rejects.toThrow();
  });
  it("should not be able to submit a feedback without image formated", async () => {

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "tudo bugado",
        screenshot: "123",
      })
    ).rejects.toThrow();
  });
});
