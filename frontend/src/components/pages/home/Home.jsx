import MessageContainer from "../../messages/MessageContainer";
import Sidebar from "../../sidebar/Sidebar";


const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
  
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;