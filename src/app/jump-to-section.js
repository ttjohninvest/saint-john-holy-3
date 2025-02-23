import { useRouter } from 'next/navigation';


const jumpToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };


  function ButtonToSection() {
    const router = useRouter();

    const jumpToSection = (sectionId) => {
      router.push(`#${sectionId}`);
    };

    return (
      <button onClick={() => jumpToSection('section1')}>
        Go to the Main Menu
      </button>
    );
  }