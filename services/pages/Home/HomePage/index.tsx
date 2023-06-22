import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../../../components/context/state";

interface HomePageStates {
  handleClick: (link: string) => void;
}

const useHomePage = (): HomePageStates => {
  const router = useRouter();
  const { handleLoading } = useContext(AppContext);

  const handleClick = (link: string) => {
    handleLoading(true);
    router.replace(link);
  };

  return {
    handleClick,
  };
};

export { useHomePage };
