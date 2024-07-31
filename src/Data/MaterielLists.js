import graffiato from "../Assets/graffiato-30.png"
import deluxInt from "../Assets/delux-int-30.jpg"
import royalInt from "../Assets/royal-int-30.jpg"
import deluxExt from "../Assets/delux-ext-30.png"
import prince from "../Assets/prince-30.png"
import champion from "../Assets/champion-30.jpg"
import trapEau from "../Assets/trapeau-30.png"
import star from "../Assets/star-30.jpg"
import enduitDelux from "../Assets/enduit-delux.jpg"
import enduitSippec from "../Assets/enduit-sippec.png"
import duralu30 from "../Assets/DURALU30.jpg"
import duralu40 from "../Assets/PAXALU40.jpg"
import paradienneVert from "../Assets/paradienne-vert.jpg"
import paradienneRouge from "../Assets/paradienne-rouge.jpg"
import bitume from "../Assets/BITUME.jpg"
import platre from "../Assets/platre.jpg"
import ciment from "../Assets/ciment.png"
import carocol from "../Assets/COLLE-CARO.jpg"
import porteSavon from "../Assets/porte-savon.png"
import wc from "../Assets/wc.jpg"
import lavabo from "../Assets/lavabo.jpg"
import robinet from "../Assets/robinet-lavabo.webp"
import portePapier from "../Assets/porte-papier.png"
import prise from "../Assets/PRISE.jpg"
import dismatic from "../Assets/dismatic.jpg"
import mitigeur from "../Assets/mitigeur.jpg"
import tubeOrange from "../Assets/tube-orange.png"
const MaterielList = [
    {
        name:"graffito-MG 30kg",
        id:"2ist",
        cover:graffiato,
        category:"peinture",
        light:3,
        water:3,
        price:44
    },
    {
        name:"delux int 30kg",
        id:"3art",
        cover:deluxInt,
        category:"peinture",
        light:2,
        water:3,
        price:43
    },
    {
        name:"royal int 30kg",
        id:"4rst",
        cover:royalInt,
        category:"peinture",
        light:3,
        water:2,
        price:42
    },
    {
        name:"delux ext 30kg",
        id:"1str",
        cover:deluxExt,
        category:"peinture",
        light:3,
        water:3,
        price:46
    },
    {
        name:"peinture prince 30kg",
        id:"4irst",
        cover:prince,
        category:"peinture",
        light:1,
        water:3,
        price:29
    },
    {
        name:"champion 30kg",
        id:"35isyt",
        cover:champion,
        category:"enduit",
        light:3,
        water:2,
        price:24
    },
    {
        name:"trap eau 30kg",
        id:"0rts",
        cover:trapEau,
        category:"enduit",
        light:3,
        water:2,
        price:25
    },
    {
        name:"enduit star 30kg",
        id:"6reipst",
        cover:star,
        category:"enduit",
        light:3,
        water:2,
        price:23
    },
    {
        name:"enduit delux 30kg",
        id:"7srtp",
        cover:enduitDelux,
        category:"enduit",
        light:3,
        water:3,
        price:26
    },
    {
        name:"enduit sippec 30kg",
        id:"75rst",
        cover:enduitSippec,
        category:"enduit",
        light:3,
        water:3,
        price:27
    },
    {
        name:"duralu 30kg",
        id:"3dkgau",
        cover:duralu30,
        category:"etanchéité",
        light:2,
        water:3,
        price:32
    },
    {
        name:"duralu 40",
        id:"4gdesr",
        cover:duralu40,
        category:"etanchéité",
        light:3,
        water:3,
        price:42
    },
    {
        name:"paradienne vert",
        id:"6lsist",
        cover:paradienneVert,
        category:"etanchéité",
        light:3,
        water:3,
        price:52
    },
    {
        name:"paradienne rouge",
        id:"2ie",
        cover:paradienneRouge,
        category:"etanchéité",
        light:3,
        water:3,
        price:52
    },
    {
        name:"bitume",
        id:"9aist",
        cover:bitume,
        category:"etanchéité",
        light:2,
        water:3,
        price:23
    },
    {
        name:"platre",
        id:"42ist",
        cover:platre,
        category:"cimenterie",
        light:3,
        water:1,
        price:10
    },
    {
        name:"ciment ordinaire",
        id:"6lmp",
        cover:ciment,
        category:"cimenterie",
        light:1,
        water:1,
        price:10
    },
    {
        name:"carrocol 25kg",
        id:"d23st",
        cover:carocol,
        category:"cimenterie",
        light:1,
        water:1,
        price:9
    },
    {
        name:"porte savon",
        id:"01mpst",
        cover:porteSavon,
        category:"sanitaire",
        light:1,
        water:1,
        price:2
    },
    {
        name:"wc ordinaire",
        id:"5isrts",
        cover:wc,
        category:"sanitaire",
        light:1,
        water:1,
        price:50
    },
    {
        name:"lavabo",
        id:"2kstp",
        cover:lavabo,
        category:"sanitaire",
        light:1,
        water:1,
        price:10
    },
    {
        name:"robinet de lavabo",
        id:"2itp",
        cover:robinet,
        category:"sanitaire",
        light:1,
        water:1,
        price:6
    },
    {
        name:"porte papier",
        id:"lk2itp",
        cover:portePapier,
        category:"sanitaire",
        light:2,
        water:1,
        price:6
    },
    {
        name:"prise apparent",
        id:"2iefgt",
        cover:prise,
        category:"electricité",
        light:1,
        water:1,
        price:2
    },
    {
        name:"porte savon",
        id:"2igt",
        cover:porteSavon,
        category:"sanitaire",
        light:1,
        water:1,
        price:2
    },
    {
        name:"dismatic",
        id:"02rst",
        cover:dismatic,
        category:"electricité",
        light:1,
        water:1,
        price:6
    },
    {
        name:"mitigeur",
        id:"7kstrt",
        cover:mitigeur,
        category:"sanitaire",
        light:1,
        water:1,
        price:30
    },
    {
        name:"tube orange",
        id:"5kst1",
        cover:tubeOrange,
        category:"electricité",
        light:1,
        water:1,
        price:30
    }
]
export default MaterielList