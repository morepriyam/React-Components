import HeroCard from "../Components/HeroCard";
import SignupCard from "../Components/SignupCard";

export default function Signup() {
  return (
    <div className="grid gap-10 lg:grid-cols-6">
      <div className="col-span-2 m-3 p-2">
        <HeroCard />
      </div>
      <div className="col-span-4 pt-3 mr-3">
        <SignupCard />
      </div>
    </div>
  );
}
