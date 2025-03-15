import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 
      justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about dogs?</h2>
        <p className="text-gray-500 my-2">Check out these resources with 100 dog types</p>

        <Button 
          as="a"
          href="https://www.google.com/search?q=google"
          target="_blank"
          rel="noopener noreferrer"
          gradientDuoTone="purpleToPink"
        >
          Learn More here
        </Button>
      </div>
      
      <div className="p-7 flex-1">
        <img 
          src="https://miro.medium.com/v2/resize:fit:1290/1*Xihz69AbbcBaondXnoXmkg.jpeg" 
          alt="Dog Image"
        />
      </div>
    </div>
  );
};

export default CallToAction;
