var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
document.getElementById("scan").addEventListener("click",spawnDots)
document.getElementById("target").addEventListener("click", spawntarget)

var WIN = false

var MAP2 = [
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKkoood0WMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWNNXXKKKKKKKKKKKKKKKXNWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKkl,.    .oNMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0xddddoolcccccccccccccccccc::,,''''..................'''''''''',;:ccccccccccccccccccccccccccccccccccccccc:;,.................................';:cclodxk00KXXXXXXXXXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0dc;..       .lKXXXNWMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                                                                                                                                                      ...........';cldxkOKNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.             ..'';dNMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                                                                                                                                                                         .',:ldxkO0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWX0l.                  .lXMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                                                                                                                                                                                  ..,lkKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:,..                     ,oxxx0NMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMNK000000d,.                                                                                                                                                                                       .ckXWMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xo:'                              .cXMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWk;...                                                                                                                                                                                               ..:kNMMMMMMMMMMMMMMMMMMMMWXOdc;..                                  .cXMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWx'.                                                                                                                                                                                                    .,o0NMMMMMMMMMMMMMWKxl;..                                    .;ld0WMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWx'.                                                                                                                                                                                                       .:dKWMMMMMMWKko;.                                        :0WMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMWWWWWWNXo'                                                                                                                                                                                                           .l0WMWKkc'.                                         .,xNMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMXd:;,'''..                                                                                                                                                                                                              .c0Kl.                                         .lk0XWMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMM0:.                                                                                                                                                                                                                       .'.                                         .oNMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMM0:.                                                                                                                                                                                                                                                                .,:dKWMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMM0:.                                                                                                                                                                                                                                                            .,lkKNWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMNOdoooool,.                                                                                                                                                                                                                                                .'lkKNWMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWx'.                                                                                                                                                                                                                                            'lx0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWx'.                                                                                                                                                                                                                                           ,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMNx'.                                                                                                                                                                                                                                        .,l0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMW0o:;;,,,'.                                                                                                                                                                                                                           ..,:ok0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWKc.                                                                                                                                                                                                                       .lk0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                                                                                                                                                                                                                       .l0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                                                                                                                                                                                                                         .oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo,.............'''''''''''''''''''',::ccccloollccccccccc:;,,'''.                                            .',,,:cloodddddddddoododooc:;,'....                                                                             .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKKKKKKKKKKKKXNNWNNNWWWWWWWWWNNWWWWWMMMMMMMMMMMMMMMMMMMMWWWWWWXl.                                         .xNWWWWMMMMMMMMMMMMMMMMMMMMMMWWNNXK0Okxdoooooloollc;'...                                                          .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                          oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXK0kdlc:,..                                                   .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                                          cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKOxdoc,.                                             ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX:                                          :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0o'                                            lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWl                                          :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0,                                           .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKkkkkKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk.                                           .dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl.  .oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc                                            .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWX:    lNWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMO,                                            .dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXXXXXXXXXNWWMMMMMMMMMMMMMMMMMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd:::;.    .;:::xWMMMMMMMMMMMMMMMMMMMMMMMMMWO;                                            .kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXOo;'........',:codkKXWMMMMMMMMMMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;              cNMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                                            lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKOxc,..                  .';cox0XWMMMMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMWKOOOx'              ,kOOOKWMMMMMMMMMMMMMMMMMMMMMMWk'                                           cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0Oxl:,..                              .,lkKWMMMx.                                         :NMMMMMMMMMMMMMMMMMMMMMMMK:....                ....cXMMMMMMMMMMMMMMMMMMMMMMMWx.                                          :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXKOxo:,..                                        .'cxKWx.                                         :NMMMMMMMMMMMMMMMMMMMMMMM0'                        ;XMMMMMMMMMMMMMMMMMMMMMMMMWo                                          '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNXKOxl;'.                                                  .'l:.                                         :NMMMMMMMMMMMMMMMMMMMMMMM0,                        ;KMMMMMMMMMMMMMMMMMMMMMMMMMx.                                         .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKkoc;,...                                                                                                     :NMMMMMMMMMMMMMMMMMMMMMMMXl..                      .oXMMMMMMMMMMMMMMMMMMMMMMMMk.                                         .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMWX0dc,..                                                                                                            :NMMMMMMMMMMMMMMMMMMMMMMMMKc.                       .oNMMMMMMMMMMMMMMMMMMMMMMMO'                                         .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMWXkc,.                                                                                                                 :NMMMMMMMMMMMMMMMMMMMMMMMMNo.                        ,KMMMMMMMMMMMMMMMMMMMMMMMX;                                          'kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMW0o,.                                                                                                                    :NMMMMMMMMMMMMMMMMMMMMMMMMM0'                        '0MMMMMMMMMMMMMMMMMMMMMMMX;                                           'OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMWKl.                                                                                                                       :NMMMMMMMMMMMMMMMMMMMMMMMMMK;                        '0MMMMMMMMMMMMMMMMMMMMMMMNc                                            'xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMN0o'                                                                                                                         :NMMMMMMMMMMMMMMMMMMMMMMMMMK,                        '0MMMMMMMMMMMMMMMMMMMMMMMW0;                                            'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMW0l'                                                                                                                           :NMMMMMMMMMMMMMMMMMMMMMMMMMk.                        '0MMMMMMMMMMMMMMMMMMMMMMMMWO,                                            cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMWKo.                                                     ......                                                                  :NMMMMMMMMMMMMMMMMMMMMMMMMX:                         ;KMMMMMMMMMMMMMMMMMMMMMMMMMWk'                                           .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMW0o'                                                   .,cd0XNNX0Okxoc,..                                                          :NMMMMMMMMMMMMMMMMMMMMMMMWx.                        .oWMMMMMMMMMMMMMMMMMMMMMMMMMMWO,                                           'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMWKo'.                                             ..',:ox0NWMMMMMMMMMMMWNXKOxl;..                                                    :NMMMMMMMMMMMMMMMMMMMMMMMWo                         ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                                           oWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMWO:.                                        ..';cox0KNWWMMMMMMMMMMMMMMMMMMMMMMMNKkl'.                                                 cNMMMMMMMMMMMMMMMMMWNXK0kx,                         :KNNNNNNNNWMMMMMMMMMMMMMMMMMMMMX:                                           :XMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMXc                                    .';cox0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc'                                               lNMMMMMMMMMMMWNKOxo:,...                             ......'',cdOXWMMMMMMMMMMMMMMMMWO'                                          .OWMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMWx.                             ..';cokKXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx;.                                           .xWWWWNXK0Okdl:,..                                               .:ONMMMMMMMMMMMMMMMMWo                                           :XMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMM0,                         .;lxO0XNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc                                            ',,,,'...                                                         .cxKNNNWMMWWNXKOxol,                                           .kMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMx.                        .dNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                                                                                                 ..'';::;,'..                                                 ;KMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMWd.                        .cONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                                                                                                                                                                               :KMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMx.                          .:xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                                                                                                                                                                               .xMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMM0:.                            'oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                                                                                                                                                                                 dMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMW0l'.                            'dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo                                                                                                                                                                                  oWMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMN0l.                             'dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl                                                                                                                                                                                  :XMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMNOc.                             'dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                                                                                                                                                                  .OMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMNkc.                             ,dXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                                                                                                                                                                                   cXMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMNOc.                             ,xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWX0o.                                                                                                                                                                                   .OMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMNO:.                            .:kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNX0kxl:,..                                                                                                                                                                                      oWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMNOc.                            .oXMMMMMMMMMMMMMMMMMMMMMWN0OOkxoc,..                                                                                                                                                                                             lWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMN0o,.                          .dNMMMMMMMMMMMMMMMWXOdc;'.                                                                                                                                                                                                      lWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMWKxc.                         'OMMMMMMMMMMMWX0xc'.                                                                                                                                                                                                           lWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMWk.                         :XMMMMMMMMMMO;.                                                                                                                                                                                                               lWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMNd.                        .kMMMMMMMMW0:                                                                                                                                                                                                                 cNMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMX:                         lNMMMMXxc,.                                                                                                                                                                                                                  ,KMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                        .kMMMNo.                                                                                                                                                                                                                     .kMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMM0;                         cKKkl.                                                                                                                                                                                                                       lNMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                         ..                                                  .':.                                                    ..,cllc;..                    .....                                                                             ;XMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:.                                                                        .,cokXXo......                                       ..';cok0XWWMMWNXOdlccccccccccccccloxO0XXXOl'                                                                           ;XMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKc.                          ..                                     ..;ldkKNMMMMMNXKKKK0Okkkxdooolc::::::::::::::::::::::::cldk0KNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOc.                          .....                                          ;XMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                        .lc.                                .,coOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0dolc:;;;,,,,,,,,,,;;;:cldk0KXNx.                                         ,KMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:                         ',.                         .';codOXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWMMMMMMMMMO.                                         .kMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,                         .,cll,            ..,;::ldOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         .kMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,                         ,kWWx.      .':lx0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                                         .xMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,                         'kNk'....;okXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                         .xMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk,                         'kXK000KWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN:                                          lNMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'                         :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN:                                          ,KMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                        ,KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                          .xWMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,                        '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                                          lWMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                        '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                                          ,OWMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                        ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                           cXMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,                        ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd:;;;:coxxkKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                                          ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.                        ,KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.         .;ldk0KKKKKKKKKKXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO'                                          ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:                         :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNK0OOd'               ............';:cccccccccccccccccccccccccccoxOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0:.                        .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.                                                               ..,:ok0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'                         .dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;.                                                                     .':oOXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0l.                         'dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKdlcc,.                                                                          ..,cokKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0l.                         .,xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk,                                                                                    ..:d0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd'                          'l0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO:.                                                                                       .,okXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl.                         'oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOxc.                                                                                      .'cONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.                         ;OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;.                                                                                        .c0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMXo.                         .oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXxl;'.                                                                                       .:kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMXl.                        .:OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNk;.                                                                                       .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMXl.                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.                                                                                         .:ONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMXo.                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0kdllc:'.                                                                                   .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMNo.                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xo:;,''''''''...                                                                     .;ONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMWk'                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWNNX0Okkkkkkkkkkkkkkkkkkkkkkkkkkkxdoc,..                                    .c0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMWO,                         :KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNX0xo:'.                                 'o0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMK:                         ,OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xc,..                             .,dXWMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMXl.                        .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOxl,.                           .c0MMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ;XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMNd.                        .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0d;.                         .lXMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         ,KMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMO'                        .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0c.                        .kWMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         .OMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMWo.                        ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX:                         oWMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         .kMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMK;                        .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                        lWMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         .xMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                        lWMMMMMMMMMMMMMMMMMMMMMMMMMK,                                          lNMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        ;XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNl                         oWMMMMMMMMMMMMMMMMMMMMMMMMMN:                                          ,KMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                        .dWMMMMMMMMMMMMMMMMMMMMMMMMMNc                                          .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                        .OMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                        .OMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        cNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                        .OMMMMMMMMMMMMMMMMMMMMMMMMMMMK,                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO.                        :XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                        .OMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMO'                        ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                         :XMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMK;                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMx.                        .kWMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMWd.                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo                         cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMKc.                        .c0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                        .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMKl.                         .ckKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWXXKKKKKKKKKKXNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo.                        .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMXo.                           .,:ldk0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNK0kdl:,'............',;:lxOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOxl.                         lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                         .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMNk;.                               ..';:ldkO0KXNNWWWNNNNNNNNNX0xoc:;,'..                        ..,;ldOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKxl;'.                            'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo                                          .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMWKl.                                       ...'',,,''....'''..                                       ..,coOKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKd,.                               .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                          .OMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMNk:.                                                                                                    .':oOKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx;.                                 :KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                          ,KMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMWXd'                                                                                                       ..;coxk0XNWMMMMMMMMMMMMMMMMMMMMMMWKl'                                  .:OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                                          cNMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMWKd,                                                                                                            ..,:lx0XNWWWMMMMMMMMMMMMMXd'                                  .;xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.                                         .xMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd'                                                                                                                ..',;::ccccclloddol,.                                  ,xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo                                          .kMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'                                                                                                                                                                   .c0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:                                          ,KMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd,.                                                                                                                                                             .;dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:                                           :XMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd'.                                                                                                                                                          .oXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo                                            lWMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx:.                                                                                                                                                     .,lONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                           .xMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo;.                                                                                                                                                .;xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                           :KMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0xl;..                                                  ..',,''....                                                                           ..'oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                          ;KMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNK0koc:,...                                 ...';coxOKXNWWNNXKK0Oxoc,..                                                             .,coxkOKKXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo........                            .....,kWMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKOkdl:;,'....      ....     ..;lxO00KXNWMMMMMMMMMMMMMMMMMMWNX0koc,..                                                    .;d0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKKKKKKKd.                          ,OKKKKXWMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNXXK0OOOOO0KXXK0OOOO0KNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOxl,..                                             .:ONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                         .oNMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xl,..                                        ,dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOxoc;,..                              .ckXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                        ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0xl:,..                      .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOxkkkkkx;          ckkkkkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKOOkkkkkkkxdoooooooooodxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWl         'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWl        .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWo       .oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOllllllldKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
]

var MAP1 = [
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMWXK000000XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMWNKl........;clllllllllllldkO00KNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMWKkkkkkkkkkkkkkkxdolc;''.                         ....,;;:::::::::::::loxkkkkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXKKKKKKKKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWNNWNNNNNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMNc                                                                          .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:........,okKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc;,'''''''''''';oKWMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMN:                                                                           cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO,           .:kXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNNNNXd.                'lOXWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMN:                                                                           cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,             .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKo;,,,,,'.                   .;d0NMMMMMMMMMMMMMMMMMMMM",
"MMMMMWo                                                                           'oO0XXXXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWk,              .:kKXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.                             .c0WMMMMMMMMMMMMMMMMMM",
"MMMMMMx.                                                                              .....;kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkc;;;;;;'.                 .,cx0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.                               'xNMMMMMMMMMMMMMMMMM",
"MMMMMMx.                                                                                  .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.                             .;oOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.                                .l0NMMMMMMMMMMMMMMM",
"MMMMMMx.                                                                                  .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.                                .'cxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0dllllll;.                                   .:xKWMMMMMMMMMMMM",
"MMMMMMx.                                                                                  .lKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.                                   .'lONWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd.                                              .cOWMMMMMMMMMM",
"MMMMMMx.                                                                                    .';;::cdXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKxoooooooc'                                       .;d0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd.                                                .oNMMMMMMMMM",
"MMMMMMx.                                                                                           ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'                                                   .cONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd.                                                 .c0NMMMMMMM",
"MMMMMMk.                                                                                           ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'                                                     .lKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc.                                                  .lKMMMMMM",
"MMMMMMK;                                                                                           ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'                                                       ,xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKkl:'.                                              .kMMMMMM",
"MMMMMMWo                                                                                      ..,:cxNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l,.                                                      .,dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNO:.                                            .xMMMMMM",
"MMMMMMWd                                                                                     'kXWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNKxl'                                                      'lONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0;                                            .xMMMMMM",
"MMMMMMNl                                                                                     .;okKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXxc'                                                     .l0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl.                                           .xMMMMMM",
"MMMMMM0'                                                                                        .'l0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNd.                                                      'dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0d:'.                                        oWMMMMM",
"MMMMMMO'                                                                                          .,kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.                                                       ,xKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXKOc.                                     cNMMMMM",
"MMMMMMO.                                                                                            .oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXKOo:.                                                     .ckXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.                                    cNMMMMM",
"MMMMMM0,.                                                                                            .:x0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx,                                                      'oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                                    oWMMMMM",
"MMMMMMNK000Okxo'                                                                                        .,o0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                                                       ,dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc.                                 .xMMMMMM",
"MMMMMMMMMMMMMMWo.                                                                                         .'dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                                                       .;OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                                .xMMMMMM",
"MMMMMMMMMMMMMMWo.                                                                                           .cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXOdc,.                                                     ;kXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                .xMMMMMM",
"MMMMMMMMMMMMMMWo.                                                                                             lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0d,.                                                   .'cxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk.                               .xMMMMMM",
"MMMMMMMMMMMMMMW0dooooo,                                                                                       'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXl.                                                     .;xKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                               .xMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMWd.                                                                                       cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKo;..                                                    .;xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                               .xMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMd.                                                                                       .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOdc'.                                                  'xNWMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.                               .xMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMO,                                                                                       .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOc.                                                 .;oOXWMMMMMMMMMMMMMMMMMMMMMMMWx.                                .xMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMWKo:;;;;,.                                                                               .xMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0o,.                                                 .;dXWMMMMMMMMMMMMMMMMMMMMMNl                                 .xMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWWWWWWK;                          ....                                                 .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc.                                                 .;dXMMMMMMMMMMMMMMMMMMMM0,                                 .dWMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                         'xXXKOkxo:.                                           .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx,                                                 .dWMMMMMMMMMMMMMMMMMMKc                                   ,0MMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc........             ...'kWMMMMMMWx.                                           ;0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOolcccccccc,.                                                 cNMMMMMMMMMMMMMMMMMXl.                                   .xMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0000000o.          'lO00XWMMMMMMMNc                                           ,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                                             :NMMMMMMMMMMMMMMMMXo.                                     :XMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.         ;0WMMMMMMMMMMMMNc                                          .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc                                                             :NMMMMMMMMMMMMMMMKl.                                      .kMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.        ;OWMMMMMMMMMMMMMNc                                           cKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc                                                             :NMMMMMMMMMMMMMMKc.                                        dWMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.       ;0WMMMMMMMMMMMMMMN:                                            ,dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXOkxxxxxo'                                                             :NMMMMMMMMMMMMMWd.                                         dWMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXkdxddddxKWMMMMMMMMMMMMMMMNl                                              'oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk'                                                                     cNMMMMMMMMMMMMMK;                                          dWMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;.                                             .,o0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.                                                                     cNMMMMMMMMMMMWKc.                                          dMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd,.                                             .'oKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.                                                                    .dWMMMMMMMWNKko'                                           .dMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd,.                                             .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKKKKKKo.                                                                   'oXMMMMWNKko;.                                              .OMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0xoccccccccccldxOKXNWMMMMMMMMMMMMMWKd,.                                            .cKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.......                                                                  .,dOKK0kdl:,.                                                 .oNMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0xl;..                .';ok0XWMMMMMMMMMMMWKd'                                            .:0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                                                        ..;c;,..                                                      .oXMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMWXOdc,..                          .,cxOXWMMMMMMMMMWKc.                                           .,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                                                                                                                     .dNMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMWN0o,.                                   .'ckXWMMMMMMMMNd.                                            ;0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;                                                                                                                                    .dNMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMM0:.                                         .,lx0XWWMMMMNx,                                           .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo                                                                                                                                   .dNMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMk.                                              ..,;::cllc,.                                           .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk.                                                                                                                                .,xNMMMMMMMMM",
"MMMMMMMMMMMMMMMMWNKko,                                                                                                       ;0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                                                                                                                              .cxKWMMMMMMMMMM",
"MMMMMMMMMMMMMMWKd;.                                                                                                          .;OWMMMMMMMMMMMMMMMMMMMMMMMMMMMNx.                                                                                                                            ,o0WMMMMMMMMMMMMM",
"MMMMMMMMMMMMNk:..                                                                                                              ,kNMMMMMMMMMMMMMMMMMMMMMMMMWXo.                                                                                                                           .dXWMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMX:                                                                                                                  .xWMMMMMMMMMMMMMMMMMMMMMWKx:.                                                                                                                          .,kWMMMMMMMMMMMMMMMMM",
"MMMMMMMMMWX0d.                                                                                                                   :XMMMMMMMMMMMMMMMMMMNX0o,.                                                                                                                          .;dKWMMMMMMMMMMMMMMMMMM",
"MMMMMMWKxc'.                                                                                                                     ;XMMMMMMMMMMMMMMMMNOl;'.                                                                                                                         .,o0NWMMMMMMMMMMMMMMMMMMMM",
"MMMMXkl'.                                                                                                                        ;XMMMMMMMMMMMMMMMKc.                                                                                                                            'dKWMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMx.                                                                                                                           ;XMMMMMMMMMMMMWXx;                                                                                                                            .;0WMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMd                                                                                                                            cXMMMMMMMMMMN0d,.                                                                                                                           .,dXMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMWd                                                                                                                       ..,cd0WMMMMMMMMNOl'.                                                                                                                          .'lOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMWd                                                                                                                    .:dOXWWMMMMMMMMMW0c'.                                                                                                                          .:xKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMd                                                                                                                   .dWMMMMMMMMMMMMMMWd.                                                                                                                          .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMd.                                                                                                                  .kMMMMMMMMMMMMMMMWd.                                                                                                                       .,o0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMk.                                                                                                               ..,oXMMMMMMMMMMMMMMMWd.                                                                                                                   .,cx0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMXl.                                                                                                          .,lx0KNWMMMMMMMMMMMMMMMMWk'.                                                                                                              .:okKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMWO'                                                                                                         ,ONWMMMMMMMMMMMMMMMMMMMMMMWKx;.                                                                                                           .;xXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMKc.                                           ..                                                            cNMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:..                                                                                                          .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"NO:.                                            .lXMMWXOo,.                                              ..;lxOKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd.                                                                                                          .;xKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMXx;                                            'xOdc,.                                                      .'xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc.                                                                                                          :OXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"l.                                             .oXMMMMMMWN0d:'.                                     ..,:oOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk,                                                                                                           .':d0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
".                                             .oNMMMMMMMMMMMWKOxl:;;,'.................',,,;;;;:ldxO0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXk;.                                                                                                              .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                             .oXMMMMMMMMMMMMMMMMMWWWWNXXXXXXXXXXXXXXXXNNWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO:.                                                                                                                 'kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                             .,o0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l.                                                                                                                    .:xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                               ..:xKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0o.                                                                                                                        .,lkKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                                  .;d0XWWMMMMMMWNK0OOOOOO0KNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXk:.                                                       .'..                                                                  .'cOWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                                     ..,:cloooc;'..      ..;dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk:.                                                       'o0NX0Okkkkkxdl,..                                                        .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                                                            .,dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0O0O00O0XMMMMMW0c.                                                     ..:OWMMMMMMMMMMMMMNKOd:'.                                                    .oWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                                                              .;kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx;........:OWMWKo.                                                      .ckXWMMMMMMMMMMMMMMMMMMN0o;.                                                  .oWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"                                                                                .lOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkl,.          'coc.                                                      .ckNMMMMMMMMMMMMMMMMMMMMWx,..                                                   .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
",                                                                                 .'l0NMMMMMMMMMMMMMMMMMMMMMMMWN0d;.                                                                     .l0WMMMMMMMMMMMMMMMMMMMMMMWo.                                                   .;xXMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"k'                                                                                   .:ONWMMMMMMMMMMMMMMMMWX0xl,.                                                                        .c0WMMMMMMMMMMMMMMMMMMMMMMMMNo.                                                 .;xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"0,                                                                                     .:x0XNWMMMMWWNXKOxl;'.                                                                         .'ckXMMMMMMMMMMMMMMMMMMMMMMMMMMWo.                                                 .dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"NOo;..                                                                                    ..,:cc::;,'..                                                                              .ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c'.                                                .dXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMNKko:'                                                                                                                                                                          .lONWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKd,.                                               .,oONWMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMWKc                                                                                                                                                                       .lKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'.                                                .,l0WMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMNo.                                                                                                                                                                   .'ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl'                                                  'xNMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMW0l,.                                                                                                                                                               ..ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNO:.                                                 .oXWMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMWXOdc,.                                                                                                                                                        ..:oOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl.                                                 ;d0NMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMWNKko:'.                                                                                                                                               .'cdOKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'                                                ..:d0NMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMWXOoc,..                                                                                                                                         .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc.                                                  .dXMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMWNKOxl;'.                                                                                                                                  .ckXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0c.                                                 .lXMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xl;.                                                                                                                           .;o0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkc.                                                .dWMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0xc'.                                                                                                                     .,xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo'                                               cNMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:.                                                                                                                  .oXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l.                                             :NMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXkc.                                                                                                              .ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKKKKKKKKXXXKK0OOkd:.                                            :NMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0d;.                                                                                                          .:oddxxONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc,............                                                  cNMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOxo:,'....       .......                                                                                        .'lKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk:.                                                              cNMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNXK000000000000KXXOl.                                                                                      ..lKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk:.                                                              oWMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l.                                                                                    ..lKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNWWWWWXx;.                                                             .xMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl'.                                                                                 .:xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXxc:;;;;,..                                                              .OMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0o;.                                                                            .;oOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl'.                                                                     ,KMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc'.                                                                      .,lkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl'.                                                                     ;XMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0o,.                                                                  ..oXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl'.                                                                     ,KMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKOxl:,'..............                                              .':OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0xdooool:..                                                                      '0MMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNXXXXXXXXXXXXk,                                            'lk0KWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx;.                                                                              '0MMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                                           .l0XNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx;.                                                                              '0MMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                              .',;coxO0XNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx;.                                                                            ..cKMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                                                      ..',;:cclooddooodooddONMMMMMMMMMMMMMMMMMMMMMMW0o;.                                                                     ,odxkO0KNWMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                                                                           ,0MMMMMMMMMMMMMMMMMMMMMMMMWX0Okkko;.                                                              dWMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,                                                                           ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl'.                                                            .dWMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWW0:.                                                                          ,0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl'.                                                            .dWMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0Oxolc;,..                                                                           'd000000KXWMMMMMMMMMMMMMMMMMMMMMMXd;.                                                    .,:cloodOXWMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNK0Okxdc,..                                                                                           ..oNMMMMMMMMMMMMMMMMMMMMMMWNKkolllc;.                                             ,KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNK0Oxol:;'..                                                                                                    .lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk:.                                            ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xl;'..                                                                                                             .lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk:.                                            ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkl,.                                                                                                                   .lKNWNNWWWMMMMMMMMMMMMMMMMMMMMMMMWO:.                               ........',;:lkNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKkc'.                                                                                                                       .'''''',c0MMMMMMMMMMMMMMMMMMMMMMMN0dc;,,'''',,;:clloddxkOOOOOOOOOO0KKXXXXXXNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKxc'.                                                                                                                                  'OWMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0o;.                                                                                                                                      'OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc.                                                                                                                                         'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0o'                                                                                                                                   .':::ccco0XNNNNNNNNNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKx:.                                                                                                                                      ...................',:o0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:.                                                                                                                                                               'xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx,.                                                                                                                                                                 'xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.                                                                                                                                                                   .:dk0XNNWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl.                                                                                                                                                                         ..''''''',,;lkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNKkc.                                                                                                                                                                                        ..:d0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOoc:,''..                                                                                                                                                                                               .;okKNWMMMMMMMMMMMMMMMMWWNXXXXXXXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                                                                                                                                                                                                          .,:oxkOOO0KXXXNWWN0o;'.....';xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                                                                                                                                                                                                                   .....',,'.         .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                                                                                                                                                                                                                                      .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMXOxdolcc;.                                                                                                                                                                                                                                       .oXMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMWO;.                                                                                                                                                                                                                                               .;:::::cdKMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMO;.                                                                      ...                                                                                                                                                                              ,OWMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMO;.                                                           ..',:lodkOO0d.                                                                                                                                                                              ,OMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMWXK00Oxxdc.                                                     .';loxk0KNWWMMMMMMXl.                                                                                                                                                                              ,OMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMXo'..                                                       .':d0XWMMMMMMMMMMMN0ko,.                                              ,dkdl;.                                                                                             EE                           .cddddddx0WMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMXl.                                                      .'lkKWMMMMMMMMMMMMN0d;.                                                 :XMMMMWd.                                                                                          EEEEEE                                 .lXMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMXl.                                                    'ckXWMMMMMMMMMMMMMMNo.                                                  .:OMMMMMMk.                                                                                           EEEEEE                                .lXMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMXo'.                                                .:kXWMMMMMMMMMMMMMMMMMK;                                                .,lONWMMMMMM0c'.                                                                                          EEEEEE                               .lXMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMWX0OOOOOOo'                                      .:kXWMMMMMMMMMMMMMMMMMMMMK;                                              .;kNWMMMMMMMMMMNK0xoc;'.                                                                                     EEEE                               .,dNMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMWO;.                                    'dXMMMMMMMMMMMMMMMMMMMMMMMK;                                            .o0NWMMMMMMMMMMMMMMMMMMWX0kdoolc:,.                                                                             EE                           ...;d0XWMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMWO;.                                  ,xXWMMMMMMMMMMMMMMMMMMMMMMMMXdcccccc:'                                   .cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKkxollllllclllllllllllllllllllllllc:;,.                                                                  'o00KNMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMWO;.                               .'oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWx.                                .ckXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXd'.                                                                ,OWMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMXkdoooloc,.                   .'lkOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                              ;kKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd'.                                                               .;0MMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                  .l0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx.                           .okXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk;.                                                            .,lx0NMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.                 'dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;''''''.                   .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKkdolccccccc:,.                                          .,ldxOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd.               .,xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNXXXXXXXO;                .:xXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0d:.                                       .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOl:;;,,,,;;:cllloxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc             .:d0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0dc'.                                   .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXc          ':lkNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xl:'.                           .':d0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl........:kXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOkkkxooollc:::::::::::::::lkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkoooooookNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
]

var MAP = MAP1;

var level = 1;

var mapHeight = MAP.length;
var mapWidth = MAP[0].length;


function getTile(x, y)
{
    // x += playerx;
    // y += playery;

    // if (x > 1900)
    //     x = 1899;
    // else if (x < 0)
    //     x = 1;

    // if (y > 1000)
    //     y = 999;
    // else if (y < 0)
    //     y = 1;
    var roundx = Math.floor(x / 1900 * mapWidth);
    var roundy = Math.floor(y / 1000 * mapHeight);

    return (new Vec(roundx, roundy));
}


var r =0;
var r2 = -1;
var xpos = 20; 
var ypos = 300;
var bounce = true;
var count = 0;

var dots = [];
var dotsNum = 0;
var ball = [];


var playerx = 950;
var playery = 500;
var playerAcc = new Vec(0, 0);
// var playerx = 0;
// var playery = 0;
var player = document.createElement("img");
player.crossOrigin = 'anonymous';
player.src = "https://raw.githubusercontent.com/LMAWorkExperince/lmaworkexperince.github.io/main/textures/sub.png"

var playerFlipped = document.createElement("img");
playerFlipped.crossOrigin = 'anonymous';
playerFlipped.src = "https://raw.githubusercontent.com/LMAWorkExperince/lmaworkexperince.github.io/main/textures/subflipped.png";

var map1 = document.createElement("img");
var map1x = 0
var map1y = 0;
map1.crossOrigin = 'anonymous';
map1.src ="https://raw.githubusercontent.com/LMAWorkExperince/lmaworkexperince.github.io/main/textures/map2.png"

var shoot = false;
var shoots = [];
var playerDirec = false;



function dot ()
{
    this.pos = new Vec();
    this.acc = new Vec();
    this.hit = false;
    this.t = 0;
    this.angle = 0;
    this.returned = false;
    this.y = 0;
    this.x = 0;
    this.num = -1;
    this.green = 255;
    if(shoot) {
        this.Colour = 'purple';
        shoot = false;
    } else {
    this.Colour = 'green';
    }

}

function spawnDots()
{
    var len = dotsNum;
    for (var i = 0 + len; i < 600 + len; i++)
    {
        dots[i] = new dot();
        dots[i].acc.x = Math.cos(i) ;
        dots[i].acc.y = Math.sin(i) ;

        // dots[i].pos.x = dots[i].acc.x + 950;
        // dots[i].pos.y = dots[i].acc.y + 500;
        dots[i].pos.x = playerx + dots[i].acc.x;
        dots[i].pos.y = playery + dots[i].acc.y;

        dots[i].angle = i;
        dotsNum++;
    }
    cent = new dot();
    cent.pos.x = 950;
    cent.pos.y = 500;

}
//setInterval(spawnDots, 2000);
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
    }

function spawntarget() {
    var blen = ball.length
    for (var i = 0+blen; i < 1 + blen; i++){ 
        ball[i] = new dot();
        ball[i].pos.x = randomRange(20,1880);
        ball[i].pos.y = randomRange(20,980);
        // var rand = randomRange(0,359)
        // ball[i].acc.x = Math.cos(rand);
        // ball[i].acc.y = Math.sin(rand);
    }
}

//setInterval(black2,50)
function moveDots()
{   
    // dotBounce()
    black2();
    for (var i = 0; i < dotsNum; i++)
    {
        if (dots[i].returned == true)
        {
            continue;
        }
        drawPixel(context, dots[i].pos.x, dots[i].pos.y, 'black', 3);
        dots[i].pos = dots[i].pos.add(dots[i].acc.multiply(5));
        drawPixel(context, dots[i].pos.x, dots[i].pos.y, dots[i].Colour, 3);
        
        var mapPos = getTile(dots[i].pos.x, dots[i].pos.y);
        
        // if ( dots[i].hit && Math.sqrt(Math.pow(950 - dots[i].pos.x, 2) + Math.pow(500 - dots[i].pos.y, 2)) < 10)
        if ( dots[i].hit && Math.sqrt(Math.pow(playerx - dots[i].pos.x, 2) + Math.pow(playery - dots[i].pos.y, 2)) < 10)
        {
            dots[i].returned = true;
            drawPixel(context, dots[i].pos.x, dots[i].pos.y, 'black');
            // dots.splice(i,1);
            // dotsNum--;
        }
        else if (dots[i].hit)
        {
            // var playerVec = new Vec(950, 500);
            var playerVec = new Vec(playerx, playery);
            dots[i].acc = dots[i].pos.subtract( playerVec ).unit().negative();
            continue;
        } 
        else if ( MAP[mapPos.y][mapPos.x] != ' ' )
        {
            // for (var j = 0; j < ball.length; j++)
            // {

                // var d = Math.sqrt(Math.pow(ball[j].pos.x - dots[i].pos.x, 2) + Math.pow(ball[j].pos.y - dots[i].pos.y, 2));
                // if (d < 15)
                // {  

                //     dots[i].acc = dots[i].acc.negative();


                //     drawPixel(context, dots[i].pos.x, dots[i].pos.y, 'black');
                //     dots[i].pos = dots[i].pos.add(dots[i].acc.multiply(5));
                //     drawPixel(context, dots[i].pos.x, dots[i].pos.y, 'green');
                //     dots[i].hit = true;

                //     dots[i].x = dots[i].pos.x
                //     dots[i].y = dots[i].pos.y

                //     dots[i].num = j;
                //     ball[j].x = ball[j].pos.x;
                //     ball[j].y = ball[j].pos.y;
                //     break;
                // }
               
                dots[i].x = dots[i].pos.x;
                dots[i].y = dots[i].pos.y;

            // dots[i].acc = dots[i].acc.negative().multiply(1);
            dots[i].hit = true;
            if (MAP[mapPos.y][mapPos.x] == 'E') {
                dots[i].Colour = 'red';

            }
            // }
            
        } 
        else if (dots[i].t > 1000)
            dots[i].returned = true;
        

        dots[i].t++;
    }
    // for (var i = 0; i < ball.length; i++){ 
        // for (var j = 0; j < dotsNum; j++)
        // {
        //     if (dots[j].returned == true) {
        //         nu = dots[j].num;
        //         nul.push(ball[nu].x);
        //         nulu.push(ball[nu].y)
        //         if (nu <0) {

        //         } else {
        //             var roundedX = Math.round(ball[nu].x);
        //             var roundedY = Math.round(ball[nu].y);
        //             context.fillStyle = 'green' || '#000';
        //             context.fillRect(roundedX-15, roundedY-15, 30, 30);
        //         }
            

        //         drawPixel(context, dots[i].pos.x, dots[i].pos.y, 'black');
        //         dots.splice(j,1)
        //         dotsNum--;
        //     }
        // }
        //drawCircle(ball[i].pos.x,ball[i].pos.y, 'green',15)
        //ball[i].pos = ball[i].pos.add(ball[i].acc.multiply(5))
    // }

}
// MAP[mapPos.y] = MAP[mapPos.y].replace("E", " ");
function floodFill(x, y)
{
    MAP[y] = MAP[y].replace("E", " ");

    if (MAP[y-1][x] == 'E') {
        floodFill(x,y-1);
    } 
    if (MAP[y+1][x] == 'E') {
        floodFill(x,y+1);
    }
    if (MAP[y][x+1] == 'E') {
        floodFill(x+1,y);
    }
    if (MAP[y][x-1] == 'E') {
        floodFill(x-1,y);
    }
}

function fire() {
    for (var i = 0; i < shoots.length; i++)
    {
        if (shoots[i].hit)
        {
            shoots[i].orange -= 0.01;
            var color = rgbToHex(255 * shoots[i].orange, 165 * shoots[i].orange, 0);
            drawPixel(context, shoots[i].pos.x, shoots[i].pos.y,  color, 10);
            if (shoots[i].orange < 0)
                shoots.splice(i,1);
            continue;
       } 
        drawPixel(context, shoots[i].pos.x, shoots[i].pos.y, 'black', 5);
        shoots[i].pos = shoots[i].pos.add(shoots[i].acc.multiply(5));
        drawPixel(context, shoots[i].pos.x, shoots[i].pos.y, 'purple', 5);
        
        
        var mapPos = getTile(shoots[i].pos.x, shoots[i].pos.y)
        if ( MAP[mapPos.y][mapPos.x] != ' ' )
        {
            if (MAP[mapPos.y][mapPos.x] == 'E') {
                
                shoots[i].hit = true

                floodFill(mapPos.x, mapPos.y);

                var containsE = true;
                for(var scanI = 1; scanI < mapHeight; scanI++) {
                    if (MAP[scanI].includes("E"))
                    {
                        containsE = true;
                        break;
                    } else {
                        containsE = false;
                    }
                }
                if (containsE == false)
                {
                    WIN = true;
                    END_TIME = (Date.now() - START_TIME) / 1000;
                }

            }
            shoots[i].orange = 1;
            shoots[i].hit = true
            drawPixel(context, shoots[i].pos.x, shoots[i].pos.y, 'black', 5);
                // shoots.splice(i,1)
            
        } 
    }
}
function spawnFire()
{
     i = shoots.length;

    shoots[i] = new dot();

    if(playerDirec) {
        shoots[i].acc.x = -1;
        shoots[i].pos.x = playerx -50+ shoots[i].acc.x;
        shoots[i].pos.y = playery + shoots[i].acc.y;
    } else if (playerDirec == false) {    
        shoots[i].acc.x = 1;
        shoots[i].pos.x = playerx +50+ shoots[i].acc.x;
        shoots[i].pos.y = playery+ shoots[i].acc.y;
    }

    shoots[i].angle = i;
}
function black2() {
    // var roundedX = Math.round(dots[i].x);
    // var roundedY = Math.round(dots[i].y);

    for (var i = 0; i < dotsNum; i++)
    {
        if (dots[i].returned == false)
            continue;

        // var x = dots[i].x + playerx;
        // var x = dots[i].y + playery;

        if (dots[i].green-- < 0)
        {
            drawPixel(context, dots[i].x, dots[i].y, 'black', 3);
            dots.splice(i,1);
            dotsNum--;
            continue;
        }

        dots[i].green--;
        // context.fillStyle = rgbToHex(0, dots[i].green, 0) || '#000';
        // context.fillRect(roundedX, roundedY, 3, 3);
        if(dots[i].Colour == 'green') {
            drawPixel(context, dots[i].x, dots[i].y, rgbToHex(0, dots[i].green, 0), 3);
        } else if (dots[i].Colour == 'red') {
            drawPixel(context, dots[i].x, dots[i].y, rgbToHex(dots[i].green, 0, 0), 3);
        } else if (dots[i].Colour == 'purple') {
            drawPixel(context, dots[i].x, dots[i].y, '#800080', 3);

        }
    }
    
}
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }

var nul = []
var nulu = []
function black() {
    for (var i = 0; i < nul.length; i++) {   
            var roundedX = Math.round(nul[i]);
            var roundedY = Math.round(nulu[i]);

            var color = context.getImageData(roundedX, roundedY, 20, 20).data;

            context.fillStyle = rgbToHex(0, color[1] - 0.5, 0) || '#000';
            context.fillRect(roundedX-15, roundedY-15, 30, 30);
    }
    if (nul.length >30) {
        nul.splice(0,3)
        nulu.splice(0,3)
    }
}
var nu = 0
var click = false
function dotBounce()
{
    for (var i = 0; i < dots.length; i++) {
        if (dots[i].pos.x >= 1900 || dots[i].pos.x <= 0) {
            dots.splice(i,1);
            dotsNum--;
            
        } 
        else if (dots[i].pos.y >= 1000 || dots[i].pos.y <= 0) {
            dots.splice(i,1)
            dotsNum--;
        }
        
    }
    for (var i = 0; i < ball.length; i++){ 
        if (ball[i].pos.x +r2>= 1900 || ball[i].pos.x -r2<= 0) {
            ball[i].acc.x = -ball[i].acc.x;
        } 
        if (ball[i].pos.y +r2>= 1000 || ball[i].pos.y -r2<= 0) {
            ball[i].acc.y = -ball[i].acc.y
        }
    }
}
function drawPixel(context, x, y, color,s=2)
{
    var roundedX = Math.round(x);
    var roundedY = Math.round(y);
    context.fillStyle = color || '#000';
    context.fillRect(roundedX, roundedY, s, s);
}
function drawCircle(xp, yp, color,max)
{
    for(r2 = 0; r2<max; r2++) {
        for(var i = 0; i < 400; i ++) {
            let x = r2 * Math.cos(i) + xp;
            let y = r2 * Math.sin(i) + yp;

            drawPixel(context, x, y, color)

        }
    } 
}

function handlePlayerMovement(deltaTime)
{
    var mapPos = getTile(playerx, playery);


    if ( MAP[mapPos.y][mapPos.x] != ' ' ) {
        playerx += -playerAcc.x * deltaTime;
        playery += -playerAcc.y * deltaTime;
        playerAcc = playerAcc.negative().divide(2);
        
    }
    

    replacePlayer();
    playerx += playerAcc.x * deltaTime;
    playery += playerAcc.y * deltaTime;
}

var shootTimer = 0;
spawnDots();
var START_TIME = Date.now();
var END_TIME = Date.now();
//spawntarget();
function run () {

    if (WIN) {
        context.fillStyle = '#000';
        context.fillRect(0, 0, 1900, 1000);
        context.fillStyle = 'blue';
        context.font = "300px Impact";    
        context.fillText( "👍 Win 👍", 400, 600 );
        
        context.font = "200px Impact";    
        context.fillText( "Time:" + END_TIME, 400, 800 );
        return;
    }



    shootTimer++;
    moveDots();

    // context.drawImage(player, 900, 485);
    // context.drawImage(map1, map1x, map1y, 1900, 1000);
    
    var deltaTime = getDeltaTime();

    handlePlayerMovement(deltaTime);
    if(playerAcc.x < 0) {
        context.drawImage(playerFlipped, playerx-50,playery-15);
        playerDirec = true
    } else if (playerAcc.x >= 0){
        context.drawImage(player, playerx-50,playery-15);
        playerDirec = false;
    }
    
    count++
    if (count == 180) {
        spawnDots()
        count = 0;
    }
    fire();

}
function replacePlayer() {
    context.fillStyle = '#000';
    context.fillRect(playerx-52, playery-15, 105, 35);
}
document.addEventListener('keydown', function (event) {
    if(event.keyCode === 32 && shootTimer > 10) {
        shootTimer = 0;
        shoots.push(new dot);
        shoot = true;
        spawnFire();
    }
    if (event.keyCode == 13) {
        playerAcc = playerAcc.multiply(.5)
    }
    if(event.keyCode === 37) {
        playerAcc.x -= 3;
    } else if (event.keyCode === 39) {
        playerAcc.x += 3;
    }
    if (event.keyCode === 38) {
        playerAcc.y -= 3;
    }  else if (event.keyCode === 40) {
        playerAcc.y += 3;
    }
    }, false);



//////////////
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();
function getDeltaTime()
{
    endFrameMillis = startFrameMillis;
    startFrameMillis = Date.now();
    var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
    if (deltaTime > 1)
    {
        deltaTime = 1;
    }
    return deltaTime;
}  

(function () {
    var onEachFrame;
    if (window.requestAnimationFrame) {
        onEachFrame = function (cb) {
            var _cb = function () { cb(); window.requestAnimationFrame(_cb); }
            _cb();
        };
    } else if (window.mozrequestAnimationFrame) {
        onEachFrame = function (cb) {
            var _cb = function () {
                cb();
                window.mozRequestAnimationFrame(_cb);
            }
            _cb();
        };
    } else {
        onEachFrame = function (cb) {
            setInterval(cb, 1000 / 60);
        }
    }

    window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);