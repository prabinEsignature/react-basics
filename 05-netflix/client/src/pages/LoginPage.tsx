import { createContext, useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import useAuth from "../hooks/useAuth";

export type Inputs = {
  email: string;
  name: string;
  password: string;
};

enum Variant {
  SIGN_UP,
  LOGIN_IN,
}

interface AuthFormContextType {
  register: UseFormRegister<Inputs> | null;
  errors: FieldErrors<Inputs>;
}

export const AuthFormContext = createContext<AuthFormContextType>({
  register: null,
  errors: {},
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<Inputs>();
  const [variant, setVariant] = useState(Variant.LOGIN_IN);
  const [authError, setAuthError] = useState("");
  const { signup, login } = useAuth();
  const onSubmit: SubmitHandler<Inputs> = async ({ password, email, name }) => {
    try {
      if (variant === Variant.SIGN_UP) {
        const response = await signup({
          email,
          password,
          username: name,
        });
        console.log(response);
      } else {
        const response = await login({
          email,
          password,
        });
      }
    } catch (error: any) {
      setAuthError(error.response.data.errors[0].msg);
    }
  };

  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <Navbar />
      <div className="flex h-full justify-center items-center">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-md rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === Variant.SIGN_UP ? "sign Up" : "Log In"}
          </h2>
          <AuthFormContext.Provider
            value={{
              register,
              errors,
            }}
          >
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {variant === Variant.SIGN_UP && (
                <Input id="username" label="Username" type="text" name="name" />
              )}
              <Input
                id="email"
                label="Email Address"
                type="email"
                name="email"
              />
              <Input
                id="password"
                label="password"
                type="password"
                name="password"
                validate={
                  variant === Variant.SIGN_UP
                    ? () => {
                        const password = getValues("password");
                        if (password.length < 8) {
                          return "Password must be greater than 8 characters";
                        }
                        if (!/[A-Z]/.test(password)) {
                          return "Password must have at least one uppercase value";
                        }
                        if (!/[a-z]/.test(password)) {
                          return "Password must have at least one lowercase value";
                        }
                        if (!/\d/.test(password)) {
                          return "Password must have a number";
                        }
                        return true;
                      }
                    : undefined
                }
              />
              <input
                type="submit"
                className="bg-red-400 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700"
              />
              {authError && <p className="text-red-500">{authError}</p>}
            </form>
          </AuthFormContext.Provider>
          {variant === Variant.LOGIN_IN ? (
            <p
              className="text-neutral-500 mt-12"
              onClick={() => setVariant(Variant.SIGN_UP)}
            >
              <span className="text-white ml-1 hover:underline cursor-pointer">
                First time using Netflix
              </span>
            </p>
          ) : (
            <p
              className="text-neutral-500 mt-12"
              onClick={() => setVariant(Variant.LOGIN_IN)}
            >
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Already have an account?
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
