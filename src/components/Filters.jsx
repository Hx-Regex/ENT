import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import Card from './Cardw'
import {IoMdMale,IoMdFemale} from 'react-icons/io'
import {IoMaleFemaleSharp} from 'react-icons/io5'
import { useState, useEffect } from 'react'


export default function Xelor() {
  const [ women , setWomen ] = useState('');
  const [ work , setWork ] = useState('');
  const [ madina , setMadina ] = useState('');

  const [jobs, setJobs] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    console.log(work)
  },[work]);
  

    const city = 
        [
            { 
              key: 1, 
              text: 'Casablanca', 
              value: 'casablanca' 
            },
            { 
              key: 2, 
              text: 'El Kelaa des Srarhna', 
              value: 'el kelaa des srarhna' 
            },
            { 
              key: 3, 
              text: 'Fez', 
              value: 'fez' 
            },
            { 
              key: 4, 
              text: 'Tangier', 
              value: 'tangier' 
            },
            { 
              key: 5, 
              text: 'Marrakech', 
              value: 'marrakech' 
            },
            { 
              key: 6, 
              text: 'Sale', 
              value: 'sale' 
            },
            { 
              key: 7, 
              text: 'Rabat', 
              value: 'rabat' 
            },
            { 
              key: 8, 
              text: 'Meknes', 
              value: 'meknes' 
            },
            { 
              key: 9, 
              text: 'Kenitra', 
              value: 'kenitra' 
            },
            { 
              key: 10, 
              text: 'Agadir', 
              value: 'agadir' 
            },
            { 
              key: 11, 
              text: 'Oujda-Angad', 
              value: 'oujda-angad' 
            },
            { 
              key: 12, 
              text: 'Tetouan', 
              value: 'tetouan' 
            },
            { 
              key: 13, 
              text: 'Taourirt', 
              value: 'taourirt' 
            },
            { 
              key: 14, 
              text: 'Temara', 
              value: 'temara' 
            },
            { 
              key: 15, 
              text: 'Safi', 
              value: 'safi' 
            },
            { 
              key: 16, 
              text: 'Laayoune', 
              value: 'laayoune' 
            },
            { 
              key: 17, 
              text: 'Mohammedia', 
              value: 'mohammedia' 
            },
            { 
              key: 18, 
              text: 'Khouribga', 
              value: 'khouribga' 
            },
            { 
              key: 19, 
              text: 'Beni Mellal', 
              value: 'beni mellal' 
            },
            { 
              key: 20, 
              text: 'El Jadida', 
              value: 'el jadida' 
            },
            { 
              key: 21, 
              text: 'Ait Melloul', 
              value: 'ait melloul' 
            },
            { 
              key: 22, 
              text: 'Nador', 
              value: 'nador' 
            },
            { 
              key: 23, 
              text: 'Taza', 
              value: 'taza' 
            },
            { 
              key: 24, 
              text: 'Settat', 
              value: 'settat' 
            },
            { 
              key: 25, 
              text: 'Berrechid',
              value: 'Berrechid',
            }
      ]

    const khedama = [  
        {key: 1,name: "Youssef Jbar",pro: true,description: "En tant qu'électricien, mon travail consiste à installer, réparer et entretenir des systèmes électriques en toute sécurité. Je suis responsable de l'installation de nouveaux systèmes, de la réparation et de l'entretien des systèmes existants, ainsi que de la résolution de problèmes électriques. Je travaille avec des outils et des équipements spécialisés et je collabore étroitement avec les clients et les autres professionnels de la construction.",rating: 123, star: 5,price: 444, job: " électricien ",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104424489174970418/image.png",workImage: "",city: "Casablanca", gendre: "Male"},
        {key: 2,name: "Mohammed Hassan",pro: false,description: "En tant que plombier, je suis chargé d'installer, réparer et entretenir les systèmes de plomberie dans les bâtiments résidentiels, commerciaux et industriels. Je dois avoir une connaissance approfondie des principes de la plomberie et des normes de sécurité pour travailler efficacement et en toute sécurité avec les équipements de plomberie. Je suis également responsable de diagnostiquer les problèmes de plomberie et de trouver des solutions efficaces pour les résoudre. Je travaille avec des outils et des équipements spécialisés et je collabore étroitement avec les clients et les autres professionnels de la construction pour assurer un travail de qualité.",rating: 76, star: 4,price: 300, job: "Plombier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104425155838619859/image.png",workImage: "",city: "Marrakech", gendre: "Male"},
        {key: 3,name: "Abdelkader Ali",pro: false,description: "En tant que menuisier, je suis chargé de fabriquer, réparer et installer des éléments en bois pour les bâtiments résidentiels, commerciaux et industriels. Je dois avoir une connaissance approfondie des différentes techniques de menuiserie et des outils spécialisés nécessaires pour effectuer ces tâches. Je suis également responsable de la réparation et de l'entretien des éléments en bois existants, comme les portes et les fenêtres. Je travaille en étroite collaboration avec les clients et les autres professionnels de la construction pour fournir un travail de qualité, tout en veillant à travailler en toute sécurité avec des outils électriques et des équipements potentiellement dangereux.",rating: 95, star: 4,price: 350, job: "Menuisier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104425318539874345/image.png",workImage: "",city: "Rabat", gendre: "Male"},
        {key: 4,name: "Nadia Bouchra",pro: false,description: "En tant que peintre en bâtiment, mon travail consiste à préparer et à peindre les surfaces intérieures et extérieures des bâtiments résidentiels, commerciaux et industriels. Je suis responsable de la préparation des surfaces avant la peinture, la réparation des surfaces endommagées, la protection des surfaces environnantes et le nettoyage du site après les travaux. Je travaille en étroite collaboration avec les clients et les autres professionnels de la construction pour répondre à leurs besoins en matière de couleurs et de finitions, tout en veillant à travailler en toute sécurité avec des outils électriques et sur des échelles.",rating: 82, star: 4,price: 400, job: "Peintre en bâtiment",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104425871294603376/image.png",workImage: "",city: "Tangier", gendre: "Female"},
        {key: 5,name: "Ali Ben Ahmed",pro: false,description: "En tant que maçon, je suis responsable de la construction, de la réparation et de l'entretien de structures en maçonnerie telles que des murs, des fondations, des dalles et des cheminées. Je dois avoir une connaissance approfondie des différentes techniques de maçonnerie et des matériaux utilisés pour effectuer ces tâches. Je travaille en étroite collaboration avec les clients et les autres professionnels de la construction pour fournir un travail de qualité, tout en veillant à travailler en toute sécurité avec des outils électriques et des équipements potentiellement dangereux. Je suis également responsable de la mesure, de la coupe et de la pose des matériaux, ainsi que de la préparation et du nettoyage du site de travail. La précision, la créativité et la capacité à travailler en équipe sont des compétences clés pour réussir en tant que maçon.",rating: 67, star: 3,price: 250, job: "Maçon",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104424411248988230/image.png",workImage: "",city: "Meknès", gendre: "Male"},
        {key: 6,name: "Fatima Zahra",pro: false,description: "En tant que couvreur, mon travail consiste à installer, réparer et entretenir les toits des bâtiments. Je dois avoir une connaissance approfondie des différents matériaux de toiture tels que les tuiles, les bardeaux, les ardoises et les métaux pour effectuer ces tâches. Je suis responsable de la mesure, de la coupe et de la pose des matériaux de toiture, ainsi que de l'installation des gouttières et des systèmes de drainage pour assurer la protection de la structure du bâtiment contre les intempéries. Je travaille en étroite collaboration avec les clients et les autres professionnels de la construction pour fournir un travail de qualité, tout en veillant à travailler en toute sécurité avec des outils électriques et des équipements potentiellement dangereux. La capacité à travailler en hauteur et la connaissance des normes de sécurité sont des compétences clés pour réussir en tant que couvreur.",rating: 0, star: 0,price: 200, job: "Couvreur",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104426458794950838/image.png",workImage: "",city: "El Jadid", gendre: "Female"},
        {key: 7,name: "Abdelaziz Moha",pro: false,description: "En tant que plâtrier, mon travail consiste à appliquer du plâtre sur les murs, les plafonds et les autres surfaces intérieures pour créer une finition lisse et uniforme. Je suis responsable de la préparation des surfaces avant l'application du plâtre, notamment la pose des lattes de plâtre et la pose des bandes de jointoiement. Je suis également responsable de la découpe et de l'installation des plaques de plâtre et des panneaux de cloison sèche pour créer des murs et des plafonds lisses. Je travaille en étroite collaboration avec les clients et les autres professionnels de la construction pour répondre à leurs besoins en matière de texture et de finition de surface, tout en veillant à travailler en toute sécurité avec des outils électriques et des équipements potentiellement dangereux. La précision, la patience et la capacité à travailler en équipe sont des compétences clés pour réussir en tant que plâtrier.",rating: 88, star: 4,price: 300, job: "Plâtrier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104426585609740368/image.png",workImage: "",city: "Fès", gendre: "Male"},
        {key: 8,name: "Hassan Bouchaib",pro: false,description: "En tant que carreleur, mon travail consiste à poser des carreaux sur les sols, les murs et d'autres surfaces intérieures ou extérieures pour créer des finitions attrayantes et fonctionnelles. Je suis responsable de la préparation des surfaces avant la pose des carreaux, notamment la mise à niveau et le lissage des surfaces, ainsi que la découpe des carreaux pour les adapter aux dimensions requises. Je suis également responsable de la sélection et de la disposition des carreaux pour créer des motifs et des designs uniques. Je travaille en étroite collaboration avec les clients et les autres professionnels de la construction pour répondre à leurs besoins en matière de style et de fonctionnalité, tout en veillant à travailler en toute sécurité avec des outils électriques et des équipements potentiellement dangereux. La précision, la patience et la capacité à travailler en équipe sont des compétences clés pour réussir en tant que carreleur.",rating: 0, star: 0,price: 150, job: "Carreleur",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104426604307951636/image.png",workImage: "",city: "Marrakech", gendre: "Male"},
        {key: 9,name: "Karima Zaki",pro: false,description: "En tant qu'électricienne, mon travail consiste à installer, réparer et entretenir des systèmes électriques en toute sécurité. Je suis responsable de l'installation de nouveaux systèmes, de la réparation et de l'entretien des systèmes existants, ainsi que de la résolution de problèmes électriques. Je travaille avec des outils et des équipements spécialisés et je collabore étroitement avec les clients et les autres professionnels de la construction pour m'assurer que les systèmes électriques sont efficaces et fiables. La sécurité est une priorité absolue dans mon travail, car je travaille souvent avec des équipements électriques dangereux. Je dois également être en mesure de communiquer efficacement avec les autres membres de l'équipe de construction et de travailler en collaboration avec eux. La précision, la rigueur et la capacité à travailler sous pression sont des compétences clés pour réussir en tant qu'électricienne.",rating: 72, star: 3,price: 200, job: "Électricien",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104426761753735198/image.png",workImage: "",city: "Agadir", gendre: "Female"},
        {key: 10,name: "Ahmed Ben Ali",pro: false,description: "Un menuisier est un professionnel qui fabrique, installe et répare des structures en bois, en métal et en matériaux composites pour les bâtiments résidentiels, commerciaux et industriels. Ils travaillent à partir de plans et de dessins techniques pour créer des pièces sur mesure pour les portes, les fenêtres, les armoires, les meubles et les revêtements de sol. Les menuisiers utilisent une variété d'outils et d'équipements spécialisés pour couper, façonner et assembler les matériaux. La précision, l'attention aux détails et les compétences en mathématiques sont essentielles pour réussir en tant que menuisier.",rating: 94, star: 4,price: 400, job: "Menuisier",image: "",workImage: "",city: "Agadir", gendre: "Male"},
        {key: 11,name: "Sara El Amrani",pro: false,description: "Un plombier est un professionnel qui installe, répare et entretient les systèmes de plomberie pour les bâtiments résidentiels, commerciaux et industriels. Ils sont responsables de l'installation de tuyaux, de conduites d'eau et de gaz, de systèmes de chauffage et de refroidissement, ainsi que de la réparation et de l'entretien des systèmes existants. Les plombiers utilisent des outils et des équipements spécialisés pour couper, façonner et assembler les matériaux. Ils collaborent également avec les clients et les autres professionnels de la construction pour s'assurer que les systèmes de plomberie répondent aux normes de sécurité et de qualité. La capacité à travailler sous pression et à résoudre des problèmes rapidement sont des compétences clés pour réussir en tant que plombier.",rating: 81,star: 4,price: 350,job: "Plombier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1106994918557225131/image.png",workImage: "",city: "Casablanca", gendre: "Female"},
        {key: 12,name: "Mounir Chakir",pro: false,description: "Un peintre en bâtiment est un professionnel qui prépare, peint et décore les surfaces intérieures et extérieures des bâtiments résidentiels, commerciaux et industriels. Ils préparent les surfaces en nettoyant, en ponçant et en appliquant des apprêts pour s'assurer que la peinture adhère correctement. Les peintres utilisent une variété d'outils et d'équipements spécialisés pour appliquer la peinture, comme des pinceaux, des rouleaux et des pulvérisateurs. Ils peuvent également effectuer des travaux de décoration en appliquant des motifs ou des textures spécifiques. Les peintres travaillent souvent en équipe et peuvent collaborer avec d'autres professionnels de la construction pour s'assurer que les travaux sont effectués conformément aux normes de sécurité et de qualité. La précision, la patience et les compétences en communication sont essentielles pour réussir en tant que peintre en bâtiment.",rating: 90,star: 4,price: 400,job: "Peintre en bâtiment",image: "",workImage: "",city: "Rabat", gendre: "Male"},
        {key: 13,name: "Fouad El Houari",pro: false,description: "Un maçon est un professionnel de la construction qui travaille sur la construction, la réparation et l'entretien de structures telles que des murs, des bâtiments et des routes. Les maçons utilisent une variété de matériaux de construction tels que la brique, la pierre et le béton pour créer des structures solides et durables. Ils doivent être capables de lire des plans et de suivre des spécifications pour s'assurer que les structures sont construites selon les normes de sécurité et de qualité requises. Les tâches typiques d'un maçon comprennent la création de fondations, la construction de murs, la pose de briques, la réalisation de travaux de coffrage, le coulage de béton et l'installation de revêtements. Les maçons peuvent travailler sur des projets de construction résidentiels, commerciaux ou industriels, et travaillent souvent en collaboration avec d'autres professionnels de la construction pour s'assurer que le travail est effectué en temps voulu et selon les spécifications requises. La force physique, la précision et la dextérité manuelle sont des compétences importantes pour réussir en tant que maçon.",rating: 78,star: 4,price: 300,job: "Maçon",image: "",workImage: "",city: "Tangier", gendre: "Male"},
        {key: 14,name: "Amina Bensaid",pro: false,description: "Le couvreur est un professionnel qui travaille à la construction et à l'entretien des toitures pour les bâtiments résidentiels, commerciaux et industriels. Il travaille avec différents matériaux de toiture pour créer des toits durables et étanches. Les tâches incluent la préparation de la surface de la toiture, l'installation de matériaux de toiture, la réparation de fuites et l'entretien régulier des toits. La sécurité est une priorité absolue pour le couvreur, qui doit travailler en hauteur et utiliser des équipements de sécurité appropriés.",rating: 0,star: 0,price: 250,job: "Couvreur",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104426915886018780/image.png",workImage: "",city: "Marrakech", gendre: "Female"},
        {key: 15,name: "Abderrahim Zeroual",pro: true,description: "Un plâtrier est un professionnel spécialisé dans la préparation et la pose de matériaux de plâtrage pour les surfaces intérieures et extérieures des bâtiments. Il travaille avec différents types de plâtre, de mortier et de ciment pour créer des surfaces planes et lisses qui peuvent être peintes, tapissées ou décorées. Les tâches comprennent la préparation de la surface, l'application des matériaux de plâtrage, le lissage et le ponçage pour obtenir une finition parfaite. Le plâtrier peut également être impliqué dans des projets de rénovation pour réparer les murs endommagés ou les plafonds fissurés.",rating: 86,star: 4,price: 350,job: "Plâtrier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104427019107844257/image.png",workImage: "",city: "Agadir", gendre: "Male"},
        {key: 16,name: "Rachid El Moutaouakil",pro: true,description: "Un électricien est un professionnel qui installe, répare et entretient des systèmes électriques pour les bâtiments résidentiels, commerciaux et industriels. Ils ont une solide compréhension des principes électriques et des normes de sécurité. Leurs tâches comprennent l'installation de nouveaux systèmes électriques, la réparation et l'entretien des systèmes existants, la résolution de problèmes électriques et la communication avec les clients et les autres professionnels de la construction. La sécurité est primordiale pour les électriciens.",rating: 92,star: 5,price: 500,job: "Électricien",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104427136791621632/image.png",workImage: "",city: "Fès", gendre: "Male"},
        {key: 17,name: "Fatima Ezzahra",pro: true,description: "Un menuisier est un professionnel qui travaille avec le bois pour créer des meubles, des portes, des fenêtres, des escaliers et d'autres éléments architecturaux pour les bâtiments résidentiels, commerciaux et industriels. Ils utilisent une variété d'outils et de techniques pour mesurer, couper, façonner et assembler le bois, et sont également compétents dans l'utilisation de matériaux composites modernes. Les menuisiers ont une attention particulière aux détails et à la finition pour garantir que chaque élément qu'ils créent est fonctionnel, durable et esthétiquement agréable. Ils travaillent souvent en étroite collaboration avec les clients pour comprendre leurs besoins et créer des solutions sur mesure. La sécurité est également une préoccupation majeure pour les menuisiers, qui doivent respecter les normes de sécurité en utilisant des équipements de protection personnelle et en maintenant un environnement de travail sûr.",rating: 80,star: 4,price: 300,job: "Menuisier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104427230869868695/image.png",workImage: "",city: "Tangier", gendre: "Female"},
        {key: 18,name: "Hamza El Hadi",pro: true,description: "Le travail d'un plombier consiste à installer, réparer et entretenir des systèmes de plomberie pour les bâtiments résidentiels, commerciaux et industriels. Les plombiers sont des professionnels hautement qualifiés qui ont une solide compréhension des principes de la plomberie et des normes de sécurité. Leurs tâches comprennent l'installation de nouveaux systèmes de plomberie, la réparation et l'entretien des systèmes existants, la résolution de problèmes de plomberie et la communication avec les clients et les autres professionnels de la construction. La sécurité est primordiale pour les plombiers.",rating: 85,star: 4,price: 350,job: "Plombier",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104427338587967549/image.png",workImage: "",city: "Meknès", gendre: "Male"},
        {key: 19,name: "Nawal Bouhssine",pro: true,description: "Un peintre en bâtiment est un professionnel qui se spécialise dans la peinture et la décoration d'intérieurs et d'extérieurs de bâtiments résidentiels, commerciaux et industriels. Leur travail consiste à préparer les surfaces à peindre, appliquer les couches de peinture ou de revêtements nécessaires, et assurer un résultat final de haute qualité. Ils utilisent des outils spécialisés tels que des pinceaux, des rouleaux, des pistolets de pulvérisation, et travaillent en étroite collaboration avec les clients pour répondre à leurs besoins esthétiques. La sécurité est également une priorité pour les peintres en bâtiment, qui doivent souvent travailler en hauteur et manipuler des produits chimiques potentiellement dangereux.",rating: 79,star: 4,price: 400,job: "Peintre en bâtiment",image: "https://cdn.discordapp.com/attachments/589338815869747203/1104427513003921479/image.png",workImage: "",city: "Casablanca", gendre: "Female"},
        
      ]

     

      const job = 
        [
          { key: 1, text: `Plombier`, value: 'plombier' },
          { key: 2, text: 'Électricien', value: 'électricien' },
          { key: 3, text: 'Menuisier', value: 'menuisier' },
          { key: 4, text: 'Maçon', value: 'maçon' },
          { key: 5, text: 'Peintre en bâtiment', value: 'peintre-en-bâtiment' },


          { key: 6, text: 'Couvreur', value: 'couvreur' },
          { key: 7, text: 'Plâtrier', value: 'plâtrier' },
          { key: 8, text: 'Carreleur', value: 'carreleur' },
          { key: 9, text: 'Chauffagiste', value: 'chauffagiste' },
          { key: 10, text: 'Serrurier', value: 'serrurier' },


          { key: 11, text: 'Vitrier', value: 'vitrier' },
          { key: 12, text: 'Charpentier', value: 'charpentier' },
          { key: 13, text: 'Paysagiste', value: 'paysagiste' },
          { key: 14, text: 'Ferronnier', value: 'ferronnier' },
          { key: 15, text: 'Babysitter', value: 'babysitter' },
          { key: 16, text: 'Chauffeur', value: 'chauffeur' },
          { key: 17, text: 'Jardinier', value: 'jardinier' },
          { key: 18, text: 'Plâtrier', value: 'plâtrier' },

      ]
      let resultats = [];
      let index = 0;

        job.map((test) => {
         
          khedama.filter((khedam) => khedam.job == test.text).map((khedam) => {
            index = index + 1
           
           

          })
          let texte 
          texte = `${test.text} ${index}`;
          let resultat = { text: texte, value: test.job  }
          resultats.push(resultat);
          
          index = 0
         
        })
    
  return (
    <>
     
  

 
        <div className='w-full h-[80%] mt-10 flex gap-4   md:flex-row flex-col md:ml-10 ml-4 '>
        <div className=' flex gap-6  flex-col items-center  h-full bg-white p-6  rounded-md '>
 
      <button onClick={() => { setWomen('Male'), console.log(women)}} className='w-[180px] h-[40px]  border-[#6ca0dc] border-2 text-[#6ca0dc] rounded-md flex justify-center items-center gap-2 hover:bg-[#6ca0dc] hover:text-white transition-all duration-300'> 
          <IoMdMale size={25} />
          <h1 className='text-[16px] font-bold'>Male Workers</h1>
     </button>
     <button onClick={() => { setWomen('Female'), console.log(women)}} className='w-[180px] h-[40px]  border-[#fa75af] border-2 text-[#fa75af] rounded-md flex justify-center items-center gap-2 hover:bg-[#fa75af] hover:text-white transition-all duration-300'>
          <IoMdFemale size={25} />
          <h1 className='text-[16px] font-bold'>Female Workers</h1>
     </button>
     <button onClick={() => { setWomen(''), console.log(women)}} className='w-[180px] h-[40px]  border-black border-2 text-black rounded-md flex justify-center items-center gap-2 hover:bg-white hover:text-black transition-all duration-300'>
          <IoMaleFemaleSharp size={25} />
          <h1 className='text-[16px] font-bold'>All genders</h1>
     </button>
     <br />
          <Dropdown 
        clearable options={city} selection  
        placeholder='Choose city' 
        onChange={(event, {value}) => {
            let text_value = event.target.textContent;
            setMadina(text_value)
        }}  
       
    />
    <Dropdown 
         clearable options={job} selection  
         placeholder='Choose Job' 
         onChange={(event, {value}) => {
             let text_value = event.target.textContent;
             setWork(text_value)
         }}  
     
      
    />
     
    


     {/* <Dropdown 
        clearable options={city} selection  
        placeholder='Choose city' 
        onChange={(event, {value}) => {
            let text_value = event.target.textContent;
            setMadina(text_value)
        }}  
       
    />
    <Dropdown 
        clearable options={job}  selection 
        placeholder='Choose Service' 
        onChange={(event, {value}) => {
           
            let text_value = event.target.textContent;
            setWork(text_value);
            
        }}  
    />
     
     */}



        </div>
        <div className='w-full h-[80%]  flex flex-wrap gap-4 '>
        {khedama
          .filter((khedam) => madina ? khedam.city === madina : true)
          .filter((khedam) => work ? khedam.job === work : true)
          .filter((khedam) => women ? khedam.gendre === women : true)
          .sort((a, b) => Number(b.pro) - Number(a.pro))
          .map((khedam) => (
             <Card 
              key={khedam.key}
              value={khedam.key}
              name={khedam.name}
              pro={khedam.pro}
              description={khedam.description}
              rating={khedam.rating}
              star={khedam.star}
              price={khedam.price}
              job={khedam.job}
              city={khedam.city}
              gender={khedam.gendre}
              img={khedam.image}

             />
          ))}
        </div>
        </div>
        
        
    </>
  )
}




  




