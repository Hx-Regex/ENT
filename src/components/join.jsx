import React from 'react'
import {BiUser} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {GrFacebook} from 'react-icons/gr'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'


export default function join() {
    const Gender = [
        { 
            key: 1, 
            text: 'Male', 
            value: 'Male' 
          },
          { 
            key: 2, 
            text: 'Female', 
            value: 'Female' 
          },
    ]
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

  ]
  return (
    <>
            <div className=' h-[700px] bg-white flex-col  items-center p-2 gap- 6  rounded-md flex md:w-[60%] w-full'>


            <div className='bg-teal-400 w-[200px] h-[200px] rounded-full'><img className='w-full h-full object-cover rounded-full' src="https://cdn.discordapp.com/attachments/589338815869747203/1095856313919082516/portrait-male-engineer-smiling-helmet-factory_1303-30629.png" alt="" /></div>
            <form className='w-full  bg-white p-6 rounded-md text-[16px] flex-wrap items-center  flex gap-6 font-bold ' action="">
     
            <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center p-4 gap-2'> <div>Nom :</div> <input type="text" name="" id="" placeholder='quel est ton Nom..' /></div>
            <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center p-4 gap-2'> <div>Prenom :</div> <input type="text" name="" id="" placeholder='quel est ton Prenom..' /></div>
            <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center p-4 gap-2'> <div>CIN :</div> <input type="text" name="" id="" placeholder='quel est ton CIN..' /></div>
            <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center p-4  mt-10 gap-2'> <div>Adress :</div> <input type="text" name="" id="" placeholder='quel est ton Adress..' /></div>
            <div className='border border-slate-500 w-auto h-[50px] rounded-sm flex items-center p-4  mt-10 gap-2'> <div>Travail :</div>     <Dropdown 
         clearable options={job} selection  
         placeholder='Choisissez Votre travail
         '  /></div>
                     <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center  mt-10 p-4 gap-2'> <div>Ville :</div>     <Dropdown 
         clearable options={city} selection  
         placeholder='Choisissez Votre ville
         '  /></div>
              <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center  mt-10 p-4 gap-2'> <div>Email :</div> <input type="text" name="" id="" placeholder='Example@Example.com' /></div>
              <div className='border border-slate-500 w-[30%] h-[50px] rounded-sm flex items-center  mt-10 p-4 gap-2'> <div>Sexe :</div>     <Dropdown 
         clearable options={Gender} selection  
         placeholder='Choisissez Votre Sexe
         '  /></div>
         <div className='w-auto h-auto flex gap-3 '>
            <label htmlFor="cv">Upload CV:</label>
                <input className='' type="file" id='cv' />
                <label htmlFor="cv">Upload Contrat:</label>
                <input className='' type="file" id='cv' />
             
         </div>
           
        
           </form>


             </div>

    </>
  )
}
