import { SafeAreaView } from "react-native";
import Header from "../../components/home/Header";
import Categories from "../../components/home/Categories";

const user = {
  name: "bafra",
  // imageSrc='https://reactnative.dev/img/tiny_logo.png'
  imageSrc:
    "https://storage.googleapis.com/download/storage/v1/b/task-tracker-336811.appspot.com/o/%2Fusers%2Fimgs%2Fuser-61d5e487b45306781f0cea46-1642267623054.jpeg?generation=1642267623313359&alt=media",
};
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header user={user} />
      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen;
