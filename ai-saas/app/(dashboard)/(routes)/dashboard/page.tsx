
import { UserButton } from "@clerk/nextjs";


const DashBoardPage = () => {
  return (
    <>
    <div>
          <p>This is dashboard (protected)</p>
          <UserButton/>
    </div>
    
    
    </>
    
  );
}

export default DashBoardPage;