import { useHomePage } from "../../../../services/pages/Home/HomePage";
import styles from "../../../../styles/Home.module.css";
import BasicButton from "../../../common/Button/BasicButton";

const HomePage: React.FC = () => {
  const { handleClick } = useHomePage();

  return (
    <div className={styles.container}>
      <main className={styles.mainHero}>
        <div className="pb-10 flex flex-col justify-center items-center">
          <h2 className="text-xl pb-2 text-purple-400 font-bold">
            Welcome to PokeApp!
          </h2>
          <BasicButton
            onClick={() => handleClick("/pokemons")}
            text="Get started"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
