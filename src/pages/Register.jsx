import Button from "../components/Button";
import Input from "../components/Input";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Register</h1>
        <p className="font-medium text-slate-400">
          Welcome, Please enter your details
        </p>
        <form action="" method="post">
          <Input
            type="text"
            name="text"
            title="Username"
            placeholder="John Doe"
            classname="border rounded text-sm w-full py-2 px-3 text-slate-700 placeholder:placeholder-opacity-50"
          />
          <Input
            type="email"
            name="email"
            title="Email"
            placeholder="example@mail.com"
            classname="border rounded text-sm w-full py-2 px-3 text-slate-700 placeholder:placeholder-opacity-50"
          />
          <Input
            type="password"
            name="password"
            title="Password"
            placeholder="****"
            classname="border rounded text-sm w-full py-2 px-3 text-slate-700 placeholder:placeholder-opacity-50"
          />
          <Button name="Sign in" color="bg-blue-500" />
          <p className="text-center text-sm mt-1">
            Already have an account? <a href="/login" className="font-bold text-blue-400 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
