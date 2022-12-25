import { FC } from "react";

type DisclaimerProps = {
  name: string;
  id: string;
  onMainChangeHandler: () => void;
};

const Disclaimer: FC<DisclaimerProps> = ({ id, name, onMainChangeHandler }) => {
  return (
    <>
      <div className="flex justify-start align-middle gap-2">
        <input
          type="checkbox"
          name={id}
          id={id}
          className="accent-accent-main"
          onChange={onMainChangeHandler}
        />
        <label htmlFor={id} className="text-left tracking-wider font-body">
          {name}
        </label>
      </div>
    </>
  );
};
export default Disclaimer;
