import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../../components/home/Header";
import Categories from "../../components/home/Categories";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";


const HomeScreen = () => {
   const { user } = useSelector((state:RootState) => state.user);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header user={user} />
        <Categories />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
