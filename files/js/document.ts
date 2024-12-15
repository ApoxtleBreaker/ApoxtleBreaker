enum Diff{
    PST = 'PAST',
    PRS = 'PRESENT',
    FTR = 'FUTURE',
    ETR = 'ETERNAL',
    BYD = 'BEYOND'
}
enum MusicTitle{
    YanjerTSAdmin='<=Arcaea=>',

    
//Arcaea
    KanagawaCyberCulvert='Kanagawa Cyber Culvert',
    Chronostasis='Chronostasis',
    Altair = 'Altair (feat. *spiLa*)',
    Dement_AfterLengend_ = 'Dement ~after lengend~',
    RedrawTheColorlessWorld = 'Redraw the Colorless World',
    Nhelv = 'Nhelv',
    ClothoAndTheStargazer = 'Clotho and the Stargazer',
    Ignotus = 'Ignotus',
//Memory Archive
    Innocence='Innocence',
    EinherjarJoker='Einherjar Joker',
    GIMMEDABLOOD = 'GIMME DA BLOOD',
    DistortedFate = 'Distorted Fate',

//Main Story
    //Luminous Sky
    FractureRay='Fracture Ray',
    Halcyon = 'Halcyon',

    //Vicious Labyrinth
    GrievousLady='Grievous Lady',
    conflict='conflict',
    Iconoclast='Iconoclast',

    //Black Fate
    HH1f1e33 = '#1f1e33',
    Equilibrium = 'Equilibrium',
    LostDesire = 'Lost Desire',

    //Adverse Prelude
    SaintOrSinner='Saint or Sinner',

//Main Story Act II
    //Lucent Historia
    Renegade='Renegade',
    SwanSong='Swan Song',
    BreachOfFaith = 'Breach of Faith',
    LamentRain = 'Lament Rain',

    //Absolute NihilIcon
    InVan = 'In Vain',

    
//Side Story
    //Absolute Reason
    ViciousHeroism = 'Vicious Heroism',
    Hypnotize = 'Hypnotize',
    Ashen6oundary = 'Ashen 6oundary',
    Judgement = 'Judgement',

    
    //Collaboration
    //Rotaeno Collaboration
    WaltzForLorelei='Waltz for lorelei',
    MVURBD = 'MVURBD',
    
    //O.N.G.E.K.I. Collaboration Chapter 3
    DontFightTheMusic='Don\'t Fight The Music',
    SUPERAMBULANCE = 'SUPER AMBULANCE',
    
}
interface EArc{
    Diff: Diff;
    DiffNum: '7' | '7+' | '8' | '8+' | '9' | '9+' | '10' | '10+' | '11' | '???'     |'∞';
    Title: string;
    Score: number;
    Rating: 'EX+' | 'EX' | 'AA' | 'A' | 'B' | 'C' | 'D'     ;
    RatingSub: 'AP' | 'FC' | 'HdC' | 'NmC' | 'EzC' | 'L'  ;
    PTTchanged: '-0.05' | '-0.04' | '-0.03' | '-0.02' | '-0.01' | '0' | '+0.01' | '+0.02' | '+0.03' | '+0.04' | '+0.05'     |'*0';
    Pass: 'Complete' | 'Lost'| 'FC' | 'AP' |  'firstPlay' | 'firstComplete' | 'firstFC' | 'firstAP';
    Date: string;
}

let ARCarr:Array<any> = []
let ARCarrSub:Array<any> = []
function addArc(eDiff:Diff, eDiffNum: '7' | '7+' | '8' | '8+' | '9' |'9+' | '10' | '10+' | '11' | '???'         |'∞', eTitle: string, eScore: number, eRating: 'EX+' | 'EX' | 'AA' | 'A' | 'B' | 'C' | 'D' , eRatingSub: 'AP' | 'FC' | 'HdC' | 'NmC' | 'EzC' | 'L' , ePTTchanged: '-0.05' | '-0.04' | '-0.03' | '-0.02' | '-0.01' | '0' | '+0.01' | '+0.02' | '+0.03' | '+0.04' | '+0.05' , ePass: 'Complete' | 'Lost' | 'FC' | 'AP' | 'firstPlay' | 'firstComplete' | 'firstFC' | 'firstAP', eDate: number): void {
    var eYear = String(eDate).slice(0, 4);
    var eMonth = String(eDate).slice(4, 6);
    var eDay = String(eDate).slice(6, 8);

    var arcList:EArc = {
        Diff: eDiff,
        DiffNum: eDiffNum,
        Title: eTitle,
        Score: eScore,
        Rating: eRating,
        RatingSub: eRatingSub,
        PTTchanged: ePTTchanged,
        Pass: ePass,
        Date: new Date(Number(eYear), Number(eMonth) - 1, Number(eDay)).toLocaleDateString()
    }
    ARCarr.push(arcList)
    console.clear()
    console.log('你可以在这里看到所有记录曲目的对象数据  包含日期')
    console.log(ARCarr)
}
//ptt初始值
let ArcPlayerPttValue:number = 10.42
{
    //从上往下记录
    addArc(Diff.FTR, '9', MusicTitle.Renegade, 9774487, 'AA', 'HdC','+0.02','Complete' ,20241201)
    addArc(Diff.FTR, '9', MusicTitle.SwanSong, 9535624, 'AA', 'NmC','-0.02' ,'Complete',20241201)
    addArc(Diff.FTR, '9', MusicTitle.SwanSong, 9658097, 'AA', 'NmC','+0.02' ,'Complete',20241201)
    addArc(Diff.PRS, '9', MusicTitle.FractureRay, 9889540, 'EX', 'HdC','+0.02','Complete' ,20241204) 
    addArc(Diff.PRS, '9', MusicTitle.HH1f1e33, 9896097, 'EX', 'HdC','+0.02','Complete' ,20241204) 
    addArc(Diff.FTR, '8+', MusicTitle.Chronostasis, 9957164, 'EX+', 'HdC','+0.01','Complete' ,20241204) 
    addArc(Diff.FTR, '9', MusicTitle.KanagawaCyberCulvert, 9960519, 'EX+', 'HdC','+0.03','Complete' ,20241204) 
    addArc(Diff.FTR, '9+', MusicTitle.EinherjarJoker, 9837026, 'EX', 'HdC','+0.01','Complete' ,20241205)
    addArc(Diff.FTR, '8+', MusicTitle.SaintOrSinner, 9962193, 'EX+', 'HdC','+0.01','Complete' ,20241206)
    addArc(Diff.ETR, '9+', MusicTitle.Innocence, 9797854, 'AA', 'HdC','+0.01','Complete' ,20241206)
    addArc(Diff.FTR, '9', MusicTitle.Iconoclast, 9874947, 'EX', 'HdC','+0.01','Complete' ,20241206)
    addArc(Diff.FTR, '10', MusicTitle.conflict, 9560479, 'AA', 'NmC','+0.01','Complete' ,20241207)
    addArc(Diff.PRS, '9' , MusicTitle.GrievousLady, 9854517, 'EX', 'HdC', '+0.01','Complete' ,20241207)
    addArc(Diff.FTR, '8+', MusicTitle.WaltzForLorelei, 9902564, 'EX+', 'HdC','+0.01','Complete' ,20241207)
    addArc(Diff.FTR, '9', MusicTitle.DontFightTheMusic, 9902564, 'EX+', 'NmC','+0.01','Complete' ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9796644, 'AA', 'HdC','+0.02','Complete' ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.Halcyon, 9556817, 'AA', 'HdC','+0.01','Complete' ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.MVURBD, 9269643, 'A', 'NmC','0',"firstComplete" ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.MVURBD, 9296381, 'A', 'NmC','0','Complete' ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.GIMMEDABLOOD, 9287209, 'A', 'NmC','0',"firstComplete" ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.SUPERAMBULANCE, 9319092, 'A', 'NmC','0','Lost' ,20241208)
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9612691, 'AA', 'NmC', '-0.01', 'Complete', 20241209);//分数没截到 瞎写的大概前两位
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9809669, 'EX', 'NmC', '0', 'Complete', 20241209);
    addArc(Diff.FTR, '8', MusicTitle.Altair, 9886267, 'EX', 'FC', '0', 'firstPlay', 20241209);
    addArc(Diff.FTR, '9', MusicTitle.InVan, 9406931, 'A', 'L', '0', 'firstPlay', 20241209);
    addArc(Diff.FTR, '9', MusicTitle.InVan, 9622974, 'AA', 'L', '0', 'Lost', 20241209);
    addArc(Diff.FTR, '9', MusicTitle.InVan, 9613962, 'AA', 'NmC', '0', 'firstComplete', 20241209);
    addArc(Diff.ETR, '9+', MusicTitle.Hypnotize, 9094491, 'B', 'L', '0', 'firstPlay', 20241209);
    addArc(Diff.FTR, '8+', MusicTitle.Hypnotize, 9673491, 'AA', 'NmC', '0', 'firstPlay', 20241209);
    addArc(Diff.FTR, '8+', MusicTitle.Ashen6oundary, 9311988, 'A', 'L', '0', 'firstPlay', 20241209);
    addArc(Diff.FTR, '9+', MusicTitle.EinherjarJoker, 9845647, 'EX', 'HdC', '0', 'Complete', 20241210);
    addArc(Diff.FTR, '9+', MusicTitle.SwanSong, 9466208, 'A', 'NmC', '-0.01', 'Complete', 20241210);
    addArc(Diff.FTR, '9+', MusicTitle.Hypnotize, 9723862, 'AA', 'NmC', '0', 'Complete', 20241210);
    addArc(Diff.FTR, '9+', MusicTitle.Ashen6oundary, 9561405, 'AA', 'NmC', '0', 'Complete', 20241210);
    addArc(Diff.FTR, '10', MusicTitle.Judgement, 8970958, 'B', 'L', '0', 'firstPlay', 20241210);
    addArc(Diff.PRS, '9', MusicTitle.GrievousLady, 9883821, 'EX', 'NmC', '+0.01', 'Complete', 20241210);
    addArc(Diff.FTR, '9', MusicTitle.DontFightTheMusic, 9772364, 'AA', 'HdC','-0.01','Complete' ,20241212)
    addArc(Diff.FTR, '9', MusicTitle.Equilibrium, 9822026, 'EX', 'HdC','+0.01','Complete' ,20241212)
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9853150, 'EX', 'NmC', '+0.01', 'Complete', 20241212);
    addArc(Diff.BYD, '9+', MusicTitle.Dement_AfterLengend_, 3788772, 'D', 'L', '0', 'firstPlay', 20241213);
    addArc(Diff.BYD, '9+', MusicTitle.Dement_AfterLengend_, 7476612, 'D', 'L', '0', 'Lost', 20241213);
    addArc(Diff.BYD, '9+', MusicTitle.Dement_AfterLengend_, 9659504, 'AA', 'NmC', '+0.01', 'firstComplete', 20241213);
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9866193, 'EX', 'NmC', '0', 'Complete', 20241213);
    addArc(Diff.FTR, '10', MusicTitle.BreachOfFaith, 9400201, 'A', 'NmC', '0', 'Complete', 20241213);
    addArc(Diff.FTR, '10', MusicTitle.BreachOfFaith, 9429352, 'A', 'NmC', '0', 'Complete', 20241213);
    addArc(Diff.FTR, '10', MusicTitle.LamentRain, 8754592, 'C', 'L', '0', 'firstPlay', 20241214);
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9583536, 'AA', 'NmC', '-0.01', 'Complete', 20241214);
    addArc(Diff.FTR, '9+', MusicTitle.SwanSong, 9409076, 'A', 'HdC', '-0.01', 'Complete', 20241214);
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9513956, 'AA', 'NmC', '-0.01', 'Complete', 20241214);
    addArc(Diff.FTR, '9', MusicTitle.InVan, 9379918, 'A', 'L', '-0.02', 'Lost', 20241214);
    addArc(Diff.FTR, '9', MusicTitle.DistortedFate, 9855978, 'EX', 'HdC', '+0.02', 'Complete', 20241214);
    addArc(Diff.FTR, '9', MusicTitle.RedrawTheColorlessWorld, 9532306, 'AA', 'NmC', '0', 'firstComplete', 20241214);
    addArc(Diff.FTR, '9+', MusicTitle.LostDesire, 9264283, 'A', 'NmC', '-0.01', 'Complete', 20241215);
    addArc(Diff.FTR, '9+', MusicTitle.LostDesire, 9498286, 'A', 'NmC', '0', 'Complete', 20241215);
    addArc(Diff.FTR, '9+', MusicTitle.Nhelv, 9531593, 'AA', 'NmC', '0', 'Complete', 20241215);
    addArc(Diff.FTR, '10', MusicTitle.GIMMEDABLOOD, 9415337, 'A', 'NmC', '0', 'Complete', 20241215);
    addArc(Diff.ETR, '8+', MusicTitle.ClothoAndTheStargazer, 9738926, 'AA', 'HdC', '0', 'firstComplete', 20241215);
    addArc(Diff.FTR, '9', MusicTitle.Ignotus, 9760228, 'AA', 'NmC', '0', 'firstComplete', 20241215);
    addArc(Diff.FTR, '10', MusicTitle.LamentRain, 7707272, 'D', 'L', '-0.01', 'Lost', 20241215);
    addArc(Diff.FTR, '10', MusicTitle.BreachOfFaith, 9407485, 'A', 'NmC', '-0.01', 'Complete', 20241215);
    

    

    addArc(Diff.BYD, '∞', MusicTitle.YanjerTSAdmin, 19198100, 'EX+', 'AP', "0", 'firstPlay', 20250401);
    
    
    ARCarr.reverse()
}
function ArrIntoDocElem():void{
    const eArcDoc = document.getElementById('ArcDocument') as HTMLDivElement | null;
    //read
    ARCarr.forEach(function(obj:EArc){
        let eDivDiff,eDivDiffNum,eDivPTTchanged,eDivPTTchangedColor,eDivRating,eDivRatingSub,eDivTitle,eDivScore,eDivPass
        if(obj.Diff == Diff.PST){
            eDivDiff = 'pst'
        }
        if(obj.Diff == Diff.PRS){
            eDivDiff = 'prs'
        }
        if(obj.Diff == Diff.FTR){
            eDivDiff = 'ftr'
        }
        if(obj.Diff == Diff.ETR){
            eDivDiff = 'etr'
        }
        if(obj.Diff == Diff.BYD){
            eDivDiff = 'byd'
        }
        
        eDivDiffNum = obj.DiffNum
        eDivPTTchanged = obj.PTTchanged

        // ArcPlayerPttValue += Number(eDivPTTchanged)
        ArcPlayerPttValue = (ArcPlayerPttValue*100 + (Number(eDivPTTchanged)*100))/100
        // console.log(Number(eDivPTTchanged))
        // console.log(ArcPlayerPttValue)
        const arcPTTDataElement = document.getElementById('ArcPTTData');
        if (arcPTTDataElement) {
            arcPTTDataElement.innerText = ArcPlayerPttValue.toFixed(2);
        }
        
        if(String(eDivPTTchanged)[0] == '+'){
            eDivPTTchangedColor = 'up'
        }
        if(String(eDivPTTchanged)[0] == '-'){
            eDivPTTchangedColor = 'down'
        }
        if(String(eDivPTTchanged)[0]!= '+' && String(eDivPTTchanged)[0] != '-'){
            eDivPTTchangedColor = 'unchanged'
            eDivPTTchanged = 'KEEP'
        }

        if(obj.Rating == 'EX+'){
            eDivRating = 'exUp'
        }
        if(obj.Rating == 'EX'){
            eDivRating = 'ex'
        }
        if(obj.Rating == 'AA'){
            eDivRating = 'aa'
        }
        if(obj.Rating == 'A'){
            eDivRating = 'a'
        }
        if(obj.Rating == 'B'){
            eDivRating = 'b'
        }
        if(obj.Rating == 'C'){
            eDivRating = 'c'
        }1
        if(obj.Rating == 'D'){
            eDivRating = 'd'
        }
        eDivRatingSub = obj.RatingSub
        eDivTitle = obj.Title
        eDivScore = obj.Score
        if(String(eDivScore).length < 8){
            //补全长度 00000000
            eDivScore = '00000000'.slice(0, 8 - String(eDivScore).length) + String(eDivScore)
        }
         //按3位分割
         eDivScore = String(eDivScore).slice(0,-6) + "'" +  String(eDivScore).slice(-6, -3) + "'" + String(eDivScore).slice(-3)
         eDivPass = obj.Pass
         if(!eDivPass){
             eDivPass = 'Error'
         }
         if(eDivPass == 'Complete'){
            eDivPass = 'cpl'
         }
         if(eDivPass == 'Lost'){
            eDivPass = 'lst'
         }
         if(eDivPass == 'FC'){
            eDivPass = 'fc'
         }
         if(eDivPass == 'AP'){
            eDivPass = 'ap'
         }
         if(eDivPass == 'firstPlay'){
            eDivPass = 'play1st'
         }
         if(eDivPass == 'firstComplete'){
            eDivPass = 'cpl1st'
         }
         if(eDivPass == 'firstFC'){
            eDivPass = 'fc1st'   
         }
         if(eDivPass == 'firstAP'){
            eDivPass = 'ap1st'
         }

         //初见FC
         if(eDivPass == 'play1st' && eDivRatingSub == 'FC'){
            eDivPass = 'oneSeeFC'
         }
                  //初见AP
        if(eDivPass == 'play1st' && eDivRatingSub == 'AP'){
            eDivPass = 'oneSeeAP'
        }
        

        
        let eDiv:HTMLDivElement = document.createElement('div')
        eDiv.className = 'ArcDocumentElement'
        eDiv.innerHTML = 
        `
                <span class="ArcDiff" ${eDivDiff}>${eDivDiffNum}</span>
                <span class="ArcScore">${eDivScore}</span>
                <span class="ArcRating" ${eDivRating}></span>
                <span class="ArcRatingSub" ${eDivRatingSub}></span>
                <span class="PTchange" ${eDivPTTchangedColor}>${eDivPTTchanged}</span>
                <span class="ArcMusicTitle">${eDivTitle}</span> 
                <span class="ArcPass" ${eDivPass}></span>
        `
        eArcDoc?.appendChild(eDiv)
        ARCarr = []
    })
    }
const addArcDoc = document.getElementById('addArcDoc') as HTMLButtonElement | null;
addArcDoc?.addEventListener('click', function() {
    ArrIntoDocElem()
});