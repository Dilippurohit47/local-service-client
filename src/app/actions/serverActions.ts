import { toast } from "sonner";

export const Signup: Function = async (formData: FormData) => {
  const name = formData.get("name");
  const password = formData.get("password");
  const email = formData.get("email");
  const phoneNo = formData.get("phoneNo");
  const country = formData.get("country");
  const city = formData.get("city");
  const state = formData.get("state");
  const pincode = formData.get("pincode");
  try {
    const res = await fetch(`http://localhost:4000/api/v1/user/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNo,
        city,
        state,
        pincode,
        country,
      }),
    });
    const data = await res.json();
    if (!data.success) {
      if (data.errors) {
        toast.error(data.errors[0]);
      } else {
        toast.error(data.error.message);
      }
    } else {
      toast.success(data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    }
  } catch (error) {
    console.log("err", error);
  }
};

export const UserSignIn = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(`http://localhost:4000/api/v1/user/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success(data.message, {
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Internal server error");
  }
};

export const serviceManSignUp = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const phoneNo = formData.get("phoneNo");
    const email = formData.get("email");
    const password = formData.get("password");
    const workingPhoneNo = formData.get("workingNo");
    const service = formData.get("services");
    const country = formData.get("country");
    const city = formData.get("city");
    const state = formData.get("state");
    const pincode = formData.get("pincode");
    const secure_url = formData.get("secure_url");

    const countryData = JSON.parse(country);
    const extractCountry = countryData[0]?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/service/sign-up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNo,
          password,
          workingPhoneNo,
          services: service,
          profileUrl: secure_url,
          country: extractCountry,
          city,
          pincode,
          state,
        }),
      }
    );

    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      setTimeout(() => {
        window.location.href = "/join/serviceman/sign-in";
      }, 500);
    }
  } catch (error) {}
};

export const serviceManSignIn = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(`http://localhost:4000/api/v1/service/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success(data.message, {
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Internal server error");
  }
};
