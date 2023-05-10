import Footer from "@component/components/Footer/Footer";
import NavBar from "@component/components/NavBar/NavBar";
import Profile from "@component/components/Profile/Profile";

const layoutPerfil = ({ children }: any) => {
  return (
    <div className="flex w-full flex-col">
      <NavBar />
      <div className="flex items-center justify-center pb-32 ">
        <div className="flex h-full flex-col items-center justify-center gap-5 px-4 lg:mt-20 lg:w-4/5 lg:flex-row xl:w-3/5 2xl:h-full ">
          <Profile />
          <div className="flex h-96 flex-col items-center justify-center">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default layoutPerfil;
