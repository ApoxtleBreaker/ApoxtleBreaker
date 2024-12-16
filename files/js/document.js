var Diff;
(function (Diff) {
    Diff["PST"] = "PAST";
    Diff["PRS"] = "PRESENT";
    Diff["FTR"] = "FUTURE";
    Diff["ETR"] = "ETERNAL";
    Diff["BYD"] = "BEYOND";
})(Diff || (Diff = {}));
var MusicTitle;
(function (MusicTitle) {
    MusicTitle["YanjerTSAdmin"] = "<=Arcaea=>";
    //Arcaea
    MusicTitle["KanagawaCyberCulvert"] = "Kanagawa Cyber Culvert";
    MusicTitle["Chronostasis"] = "Chronostasis";
    MusicTitle["Altair"] = "Altair (feat. *spiLa*)";
    MusicTitle["Dement_AfterLengend_"] = "Dement ~after lengend~";
    MusicTitle["RedrawTheColorlessWorld"] = "Redraw the Colorless World";
    MusicTitle["Nhelv"] = "Nhelv";
    MusicTitle["ClothoAndTheStargazer"] = "Clotho and the Stargazer";
    MusicTitle["Ignotus"] = "Ignotus";
    //Memory Archive
    MusicTitle["Innocence"] = "Innocence";
    MusicTitle["EinherjarJoker"] = "Einherjar Joker";
    MusicTitle["GIMMEDABLOOD"] = "GIMME DA BLOOD";
    MusicTitle["DistortedFate"] = "Distorted Fate";
    //Main Story
    //Luminous Sky
    MusicTitle["FractureRay"] = "Fracture Ray";
    MusicTitle["Halcyon"] = "Halcyon";
    //Vicious Labyrinth
    MusicTitle["GrievousLady"] = "Grievous Lady";
    MusicTitle["conflict"] = "conflict";
    MusicTitle["Iconoclast"] = "Iconoclast";
    //Black Fate
    MusicTitle["HH1f1e33"] = "#1f1e33";
    MusicTitle["Equilibrium"] = "Equilibrium";
    MusicTitle["LostDesire"] = "Lost Desire";
    //Adverse Prelude
    MusicTitle["SaintOrSinner"] = "Saint or Sinner";
    //Main Story Act II
    //Lucent Historia
    MusicTitle["Renegade"] = "Renegade";
    MusicTitle["SwanSong"] = "Swan Song";
    MusicTitle["BreachOfFaith"] = "Breach of Faith";
    MusicTitle["LamentRain"] = "Lament Rain";
    //Absolute NihilIcon
    MusicTitle["InVan"] = "In Vain";
    //Side Story
    //Absolute Reason
    MusicTitle["ViciousHeroism"] = "Vicious Heroism";
    MusicTitle["Hypnotize"] = "Hypnotize";
    MusicTitle["Ashen6oundary"] = "Ashen 6oundary";
    MusicTitle["Judgement"] = "Judgement";
    //Collaboration
    //Rotaeno Collaboration
    MusicTitle["WaltzForLorelei"] = "Waltz for lorelei";
    MusicTitle["MVURBD"] = "MVURBD";
    //O.N.G.E.K.I. Collaboration Chapter 2
    MusicTitle["GoodBye_Merry_Go_Round"] = "Good bye, Merry-Go-Round.";
    MusicTitle["LAMIA"] = "LAMIA";
    //O.N.G.E.K.I. Collaboration Chapter 3
    MusicTitle["DontFightTheMusic"] = "Don't Fight The Music";
    MusicTitle["SUPERAMBULANCE"] = "SUPER AMBULANCE";
    MusicTitle["AndReviveTheMelody"] = "And Revive the Melody";
})(MusicTitle || (MusicTitle = {}));
var ARCarr = [];
var ARCarrSub = [];
function addArc(eDiff, eDiffNum, eTitle, eScore, eRating, eRatingSub, ePTTchanged, ePass, eDate) {
    var eYear = String(eDate).slice(0, 4);
    var eMonth = String(eDate).slice(4, 6);
    var eDay = String(eDate).slice(6, 8);
    var arcList = {
        Diff: eDiff,
        DiffNum: eDiffNum,
        Title: eTitle,
        Score: eScore,
        Rating: eRating,
        RatingSub: eRatingSub,
        PTTchanged: ePTTchanged,
        Pass: ePass,
        Date: new Date(Number(eYear), Number(eMonth) - 1, Number(eDay)).toLocaleDateString()
    };
    ARCarr.push(arcList);
    console.clear();
    console.log('你可以在这里看到所有记录曲目的对象数据  包含日期');
    console.log(ARCarr);
    console.log("    \n    \u5165\u6863\u89C4\u5219\n        \u9996\u6B21\u6E38\u73A9/...\n        FC/AP\n        \u5F71\u54CD\u5230\u5206\u6570\n        \u5386\u53F2\u65B0\u9AD8\n        \u6709\u7279\u6B8A\u610F\u4E49\n    ");
}
//ptt初始值
var ArcPlayerPttValue = 10.42;
{
    //从上往下记录
    addArc(Diff.FTR, '9', MusicTitle.Renegade, 9774487, 'AA', 'HdC', '+0.02', 'Complete', 20241201);
    addArc(Diff.FTR, '9', MusicTitle.SwanSong, 9535624, 'AA', 'NmC', '-0.02', 'Complete', 20241201);
    addArc(Diff.FTR, '9', MusicTitle.SwanSong, 9658097, 'AA', 'NmC', '+0.02', 'Complete', 20241201);
    addArc(Diff.PRS, '9', MusicTitle.FractureRay, 9889540, 'EX', 'HdC', '+0.02', 'Complete', 20241204);
    addArc(Diff.PRS, '9', MusicTitle.HH1f1e33, 9896097, 'EX', 'HdC', '+0.02', 'Complete', 20241204);
    addArc(Diff.FTR, '8+', MusicTitle.Chronostasis, 9957164, 'EX+', 'HdC', '+0.01', 'Complete', 20241204);
    addArc(Diff.FTR, '9', MusicTitle.KanagawaCyberCulvert, 9960519, 'EX+', 'HdC', '+0.03', 'Complete', 20241204);
    addArc(Diff.FTR, '9+', MusicTitle.EinherjarJoker, 9837026, 'EX', 'HdC', '+0.01', 'Complete', 20241205);
    addArc(Diff.FTR, '8+', MusicTitle.SaintOrSinner, 9962193, 'EX+', 'HdC', '+0.01', 'Complete', 20241206);
    addArc(Diff.ETR, '9+', MusicTitle.Innocence, 9797854, 'AA', 'HdC', '+0.01', 'Complete', 20241206);
    addArc(Diff.FTR, '9', MusicTitle.Iconoclast, 9874947, 'EX', 'HdC', '+0.01', 'Complete', 20241206);
    addArc(Diff.FTR, '10', MusicTitle.conflict, 9560479, 'AA', 'NmC', '+0.01', 'Complete', 20241207);
    addArc(Diff.PRS, '9', MusicTitle.GrievousLady, 9854517, 'EX', 'HdC', '+0.01', 'Complete', 20241207);
    addArc(Diff.FTR, '8+', MusicTitle.WaltzForLorelei, 9902564, 'EX+', 'HdC', '+0.01', 'Complete', 20241207);
    addArc(Diff.FTR, '9', MusicTitle.DontFightTheMusic, 9902564, 'EX+', 'NmC', '+0.01', 'Complete', 20241208);
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9796644, 'AA', 'HdC', '+0.02', 'Complete', 20241208);
    addArc(Diff.FTR, '10', MusicTitle.Halcyon, 9556817, 'AA', 'HdC', '+0.01', 'Complete', 20241208);
    addArc(Diff.FTR, '10', MusicTitle.MVURBD, 9269643, 'A', 'NmC', '0', "firstComplete", 20241208);
    addArc(Diff.FTR, '10', MusicTitle.MVURBD, 9296381, 'A', 'NmC', '0', 'Complete', 20241208);
    addArc(Diff.FTR, '10', MusicTitle.GIMMEDABLOOD, 9287209, 'A', 'NmC', '0', "firstComplete", 20241208);
    addArc(Diff.FTR, '10', MusicTitle.SUPERAMBULANCE, 9319092, 'A', 'NmC', '0', 'Lost', 20241208);
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9612691, 'AA', 'NmC', '-0.01', 'Complete', 20241209); //分数没截到 瞎写的大概前两位
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
    addArc(Diff.FTR, '9', MusicTitle.DontFightTheMusic, 9772364, 'AA', 'HdC', '-0.01', 'Complete', 20241212);
    addArc(Diff.FTR, '9', MusicTitle.Equilibrium, 9822026, 'EX', 'HdC', '+0.01', 'Complete', 20241212);
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
    addArc(Diff.FTR, '8+', MusicTitle.Hypnotize, 9754105, 'AA', 'NmC', '0', 'Complete', 20241215);
    addArc(Diff.FTR, '9+', MusicTitle.Ashen6oundary, 9633253, 'AA', 'NmC', '+0.01', 'Complete', 20241215);
    addArc(Diff.PRS, '8+', MusicTitle.LamentRain, 9676396, 'AA', 'NmC', '0', 'firstPlay', 20241215);
    addArc(Diff.PRS, '8+', MusicTitle.LamentRain, 9672175, 'AA', 'NmC', '-0.01', 'Complete', 20241215);
    addArc(Diff.PRS, '8', MusicTitle.Judgement, 9925103, 'EX+', 'NmC', '0', 'firstPlay', 20241215);
    addArc(Diff.PRS, '8+', MusicTitle.LamentRain, 9570982, 'AA', 'NmC', '-0.01', 'Complete', 20241215);
    addArc(Diff.PRS, '8+', MusicTitle.LamentRain, 9748056, 'AA', 'HdC', '0', 'Complete', 20241215);
    addArc(Diff.PRS, '8', MusicTitle.Judgement, 9977250, 'EX+', 'FC', '+0.01', 'firstFC', 20241216);
    addArc(Diff.PRS, '6', MusicTitle.InVan, 9978501, 'EX+', 'NmC', '0', 'firstPlay', 20241216);
    addArc(Diff.PRS, '8+', MusicTitle.LamentRain, 9726988, 'AA', 'NmC', '-0.01', 'Complete', 20241216);
    addArc(Diff.PRS, '7', MusicTitle.GoodBye_Merry_Go_Round, 9943163, 'EX+', 'HdC', '0', 'firstPlay', 20241216);
    addArc(Diff.PRS, '8', MusicTitle.LAMIA, 7017511, 'D', 'L', '0', 'firstPlay', 20241216);
    addArc(Diff.PRS, '8', MusicTitle.LAMIA, 9814341, 'EX', 'NmC', '0', 'firstComplete', 20241216);
    addArc(Diff.PRS, '8', MusicTitle.AndReviveTheMelody, 9886883, 'EX', 'HdC', '0', 'firstPlay', 20241216);
    addArc(Diff.PRS, '8', MusicTitle.LAMIA, 9921693, 'EX+', 'HdC', '0', 'Complete', 20241216);
    addArc(Diff.FTR, '10', MusicTitle.ViciousHeroism, 9779229, 'AA', 'NmC', '0', 'Complete', 20241216);
    addArc(Diff.PRS, '8+', MusicTitle.LamentRain, 9798664, 'AA', 'NmC', '0', 'Complete', 20241216);
    //入档规则
    //首次游玩/...
    //FC/AP
    //影响到分数
    //历史新高
    //有特殊意义
    addArc(Diff.BYD, '∞', MusicTitle.YanjerTSAdmin, 19198100, 'EX+', 'AP', "0", 'firstPlay', 20250401);
    ARCarr.reverse();
}
function ArrIntoDocElem() {
    var eArcDoc = document.getElementById('ArcDocument');
    //read
    ARCarr.forEach(function (obj) {
        var eDivDiff, eDivDiffNum, eDivPTTchanged, eDivPTTchangedColor, eDivRating, eDivRatingSub, eDivTitle, eDivScore, eDivPass;
        if (obj.Diff == Diff.PST) {
            eDivDiff = 'pst';
        }
        if (obj.Diff == Diff.PRS) {
            eDivDiff = 'prs';
        }
        if (obj.Diff == Diff.FTR) {
            eDivDiff = 'ftr';
        }
        if (obj.Diff == Diff.ETR) {
            eDivDiff = 'etr';
        }
        if (obj.Diff == Diff.BYD) {
            eDivDiff = 'byd';
        }
        eDivDiffNum = obj.DiffNum;
        eDivPTTchanged = obj.PTTchanged;
        // ArcPlayerPttValue += Number(eDivPTTchanged)
        ArcPlayerPttValue = (ArcPlayerPttValue * 100 + (Number(eDivPTTchanged) * 100)) / 100;
        // console.log(Number(eDivPTTchanged))
        // console.log(ArcPlayerPttValue)
        var arcPTTDataElement = document.getElementById('ArcPTTData');
        if (arcPTTDataElement) {
            arcPTTDataElement.innerText = ArcPlayerPttValue.toFixed(2);
        }
        if (String(eDivPTTchanged)[0] == '+') {
            eDivPTTchangedColor = 'up';
        }
        if (String(eDivPTTchanged)[0] == '-') {
            eDivPTTchangedColor = 'down';
        }
        if (String(eDivPTTchanged)[0] != '+' && String(eDivPTTchanged)[0] != '-') {
            eDivPTTchangedColor = 'unchanged';
            eDivPTTchanged = 'KEEP';
        }
        if (obj.Rating == 'EX+') {
            eDivRating = 'exUp';
        }
        if (obj.Rating == 'EX') {
            eDivRating = 'ex';
        }
        if (obj.Rating == 'AA') {
            eDivRating = 'aa';
        }
        if (obj.Rating == 'A') {
            eDivRating = 'a';
        }
        if (obj.Rating == 'B') {
            eDivRating = 'b';
        }
        if (obj.Rating == 'C') {
            eDivRating = 'c';
        }
        1;
        if (obj.Rating == 'D') {
            eDivRating = 'd';
        }
        eDivRatingSub = obj.RatingSub;
        eDivTitle = obj.Title;
        eDivScore = obj.Score;
        if (String(eDivScore).length < 8) {
            //补全长度 00000000
            eDivScore = '00000000'.slice(0, 8 - String(eDivScore).length) + String(eDivScore);
        }
        //按3位分割
        eDivScore = String(eDivScore).slice(0, -6) + "'" + String(eDivScore).slice(-6, -3) + "'" + String(eDivScore).slice(-3);
        eDivPass = obj.Pass;
        if (!eDivPass) {
            eDivPass = 'Error';
        }
        if (eDivPass == 'Complete') {
            eDivPass = 'cpl';
        }
        if (eDivPass == 'Lost') {
            eDivPass = 'lst';
        }
        if (eDivPass == 'FC') {
            eDivPass = 'fc';
        }
        if (eDivPass == 'AP') {
            eDivPass = 'ap';
        }
        if (eDivPass == 'firstPlay') {
            eDivPass = 'play1st';
        }
        if (eDivPass == 'firstComplete') {
            eDivPass = 'cpl1st';
        }
        if (eDivPass == 'firstFC') {
            eDivPass = 'fc1st';
        }
        if (eDivPass == 'firstAP') {
            eDivPass = 'ap1st';
        }
        //初见FC
        if (eDivPass == 'play1st' && eDivRatingSub == 'FC') {
            eDivPass = 'oneSeeFC';
        }
        //初见AP
        if (eDivPass == 'play1st' && eDivRatingSub == 'AP') {
            eDivPass = 'oneSeeAP';
        }
        var eDiv = document.createElement('div');
        eDiv.className = 'ArcDocumentElement';
        eDiv.innerHTML =
            "\n                <span class=\"ArcDiff\" ".concat(eDivDiff, ">").concat(eDivDiffNum, "</span>\n                <span class=\"ArcScore\">").concat(eDivScore, "</span>\n                <span class=\"ArcRating\" ").concat(eDivRating, "></span>\n                <span class=\"ArcRatingSub\" ").concat(eDivRatingSub, "></span>\n                <span class=\"PTchange\" ").concat(eDivPTTchangedColor, ">").concat(eDivPTTchanged, "</span>\n                <span class=\"ArcMusicTitle\">").concat(eDivTitle, "</span> \n                <span class=\"ArcPass\" ").concat(eDivPass, "></span>\n        ");
        eArcDoc === null || eArcDoc === void 0 ? void 0 : eArcDoc.appendChild(eDiv);
        ARCarr = [];
    });
}
var addArcDoc = document.getElementById('addArcDoc');
addArcDoc === null || addArcDoc === void 0 ? void 0 : addArcDoc.addEventListener('click', function () {
    ArrIntoDocElem();
});
