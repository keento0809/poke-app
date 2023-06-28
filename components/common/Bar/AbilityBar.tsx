interface Props {
  abilityValue: number;
}

const AbilityBar: React.FC<Props> = ({ abilityValue }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-purple-700 h-2.5 rounded-full"
        style={{ width: `${Math.floor((abilityValue / 300) * 100)}%` }}
      ></div>
    </div>
  );
};

export default AbilityBar;
