import ImagenCompanyGeneral from '@img/user.png'
import ImagenCompanyWebp from '@img/logoCompany.webp'
import ImagenCompanyJpg from '@img/logoCompany.jpg'
import ImagenCompanyPng from '@img/logoCompany.png'
// Modulos que estarán activos
export const ModuelesActives = {
  Home: true, //Inicio
  User: true, 
  Services: true, //Servicios
  Products: false, //Productos
  Photos: true, //Fotos
  DownloadApp: true, 
}

export const company = {
  name: "The House Exclusive",
  principalColorTitles: "blue",
  principalColorParrafos: "slate",
  principalColorButtonsBg: "blue",
  principalColorButtonsText: "white",
}

// Paths Iconos 
export const pathsIconos = {
  path1downloadApp:"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z",
  path2downloadApp: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z",
  path1home: "M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5",
  path2home: "",
  path1products: "M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z",
  path2products: "",
  path1services: "M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z",
  path2services: "",
  path1photos: "M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
  path2photos: "M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z",
  }

export const linkProducts = "https://wa.me/c/573133487191";
export const linkServices = "https://wa.me/c/573133487191";
export const linkPhotos = "https://wa.me/c/573133487191";
export const LinkWhasapp = "https://wa.link/aqi5a7";
export const LinkUsuario = "https://wa.me/c/573133487191";

            
export const generalConfig = {
  name: company.name,  
  Header: {
    nameCompany: company.name,
    logoCompanyGeneral: ImagenCompanyGeneral,
    logoCompanyWebp: ImagenCompanyWebp,
    logoCompanyJpg: ImagenCompanyJpg,
    logoCompanyPng: ImagenCompanyPng,
    classLinksHome: "text-blue-900 font-open-sans font-extrabold text-lg",
    classLinksAll: "flex flex-row items-center justify-center gap-2 py-2 px-3 md:p-0 text-stone-600 font-open-sans font-semibold hover:bg-zinc-100 text-base",
    linksPages: [
      { href: "/", id: "home", text: "Inicio", 
        icon: "bi-house-door-fill", active: true,
        path1:pathsIconos.path1home,
        path2:pathsIconos.path2home
      },
      { href: linkProducts, id: "products", text: "Productos", 
        icon: "bi-box-seam", active: true,
        path1:pathsIconos.path1products,
        path2:pathsIconos.path2products
      },
      { href: linkServices, id: "services", text: "Servicios", 
        icon: "bi-tools", active: true,
        path1:pathsIconos.path1services,
        path2:pathsIconos.path2services
      },
      { href: linkPhotos, id: "photos", text: "Publicaciones", 
        icon: "bi-tools", active: true,
        path1:pathsIconos.path1photos,
        path2:pathsIconos.path2photos
      },
      ],
    },
  TagBar: {
    linksPages: [
      { href: "/", id: "home", text: "Inicio", 
        icon: "bi-house-door-fill", active: true,
        path1:pathsIconos.path1home,
        path2:pathsIconos.path2home
      },
      { href: linkProducts, id: "products", text: "Productos", 
        icon: "bi-box-seam", active: true,
        path1:pathsIconos.path1products,
        path2:pathsIconos.path2products
      },
      { href: linkServices, id: "services", text: "Servicios", 
        icon: "bi-tools", active: true,
        path1:pathsIconos.path1services,
        path2:pathsIconos.path2services
      },
      { href: linkPhotos, id: "photos", text: "Publicaciones", 
        icon: "bi-tools", active: true,
        path1:pathsIconos.path1photos,
        path2:pathsIconos.path2photos
      }
      ],
  }
}

