import { toast } from "sonner";

export const Signup: Function = async (formData: FormData) => {
  const name = formData.get("name");
  const password = formData.get("password");
  const email = formData.get("email");
  const phoneNo = formData.get("phoneNo");
  try {
    const res = await fetch(`http://localhost:4000/api/v1/user/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNo,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data?.errors) {
      const errorsObject = data.errors;
      const errorsArray = Object.keys(errorsObject).map((key) => {
        return { [key]: errorsObject[key] };
      });
      toast.error(Object.values(errorsArray[0])[0]);
    }
    if (data.error) {
      console.log("in error");
      toast.error(data.error?.message);
    } else {
      toast.success(data.message);
    }
  } catch (error) {
    console.log("err", error);
  }
};

