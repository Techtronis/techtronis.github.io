﻿(function(){
var additionalData = [
["history.html","Revision History",
"\t\t\nRevision History\nVersion 1.0 2021-08-30\n \tInitial version.\nCONFIDENTIAL\n",3,"en-US"],
["Pages/Page_1137766828.html","1 Introduction",
"\t\t\n1 Introduction\nThis document describes the procedures to run applications on the ADEV for people who are using an ADEV for the first time.\nUse the following procedures to run applications on ADEV hardware.\nCheck 2 ADEV Operating Environment prior to setup.\n \tChapter \tDevelopers \tNon-Developers\n \t 3 Setting up the ADEV \t✓ \t✓\n \t 4 Preparing Nintendo Dev Interface \t✓ \t✓\n \t 5 Setting Up NintendoSDK \t✓ \t✓\n \t 6 Initializing the ADEV \t✓ \t✓\n \t 7 Setting up the Joy-Con \t✓ \t✓\n \t 8 Building and Running Applications (For Developers) \t✓ \t\n \t 9 Installing Applications (For Non-Developers) \t✓ \t✓\n \t 10 Running Applications (For Non-Developers) \t✓ \t✓\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766830.html","2 ADEV Operating Environment",
"\t\t\n2 ADEV Operating Environment\n The environment described on this page is the information at the time ADEV support was implemented. For the latest operating environment information, see NintendoSDK Documents > NintendoSDK Overview > Operating Environment.\nThe following environment is required for ADEV setup and application execution.\n \tOperating system \t \tMicrosoft Windows 10 Pro (64-bit) English or Japanese version\n Note\n An account with administrator rights is required.\n Note\n Behavior is not assured if you change the system locale in the operating system to something other than the default value.\n \t .NET Framework\n \t \tMicrosoft .NET Framework 4.7.2 or later\n Info\n If not already installed, download and install from the following link.\n https://support.microsoft.com/en-us/help/4054531/microsoft-net-framework-4-7-2-web-installer-for-windows\n \t.NET Core SDK \t \t.NET Core SDK 3.1.410\n Info\n If this is not already installed, use the installer at the following path.\n \tNintendoSDK\\Installers\\DotNetSdk\\v3.1\\dotnet-sdk-3.1.410-win-x64.exe\n \tNX Add-On \t \tNintendoSDK NX Add-On 13.2.0 and later\n \tSystemUpdater \t \tNintendoSDK SystemUpdater for NX 13.0.0-3.0 and later\n In addition, you need the following environments to execute 8 Building and Running Applications (For Developers).\n \tVisual Studio \t \tMicrosoft Visual Studio 2017 Professional Edition version 15.9.30\tEnglish language bundle required\n \tMicrosoft Visual Studio 2019 Professional Edition version 16.10.3 (For additional considerations when using Visual Studio 2019, see the NintendoSDK Documents.)\tEnglish language bundle required\n \tWindows SDK \t \tWindows SDK 10.0.15063.0 (when using Visual Studio 2017)\n \tWindows SDK 10.0.19041.0 (when using Visual Studio 2019)\n Info\n To use the NintendoSDK, you must install the Visual C++ redistributable packages.\nIf they are not installed, use one of the following installers to install the packages. (You must install all four of them.)\n \tPackage Type \tInstaller Path\n \tVisual C++ Redistributable Packages\nfor Visual Studio 2013 \tNintendoSDK\\Installers\\VcRuntime\\v120\\\tvcredist_x64.exe\n\tvcredist_x86.exe\n \tVisual C++ Redistributable Packages\nfor Visual Studio 2017 \tNintendoSDK\\Installers\\VcRuntime\\v141\\\tvc_redist.x64.exe\n\tvc_redist.x86.exe\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766832.html","3 Setting up the ADEV",
"\t\t\n3 Setting up the ADEV\nWe recommend charging the ADEV for about one hour before setup.\nCharge by connecting the AC adapter to the USB Type-C™ terminal on the bottom of the ADEV console.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766835.html","4 Preparing Nintendo Dev Interface",
"\t\t\n4 Preparing Nintendo Dev Interface\nAbout Nintendo Dev Interface\nNintendo Dev Interface (NDI) is a tool for setting up and managing the development environment.\n Installing NDI\n Info\n To install NDI, you must have Windows administrator rights.\n \tStep \tOperation\n \t1 \t Download the NDI installer package from Nintendo Developer Portal > DEVELOPER SUPPORT > Nintendo Switch > Downloads.\n \t2 \t Double-click the installer from the downloaded package to run it.\n \t3 \t Select the language for installation.\n \t4 \t Follow the installer instructions to configure the program.\nYou can change the installation path from this screen.\n On this screen, specify shortcut creation and registration to the Start Menu.\nIf you select Add application directory to PATH, the directory with the NDI program is added to the PATH environment variable.\nThis option is useful for calling NDI from the command line.\n To start the installation, click Next.\n Note: NDI requires .NET Framework 4.6.2.\n　 If .NET Framework 4.6.2 is not installed, its installer starts.\n　 Follow the instructions to install .NET Framework 4.6.2.\n \t5 \t To finish the installation, click Finish.\nNote: If you have installed .NET Framework 4.6.2 using the preceding procedure, restart Windows before you start Nintendo Dev Interface and run it from the Start menu.\n A shortcut to the program is added to the Start menu.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766851.html","5 Setting Up NintendoSDK",
"\t\t\n5 Setting Up NintendoSDK\nThe NintendoSDK is obtained from the Nintendo server using NDI. NDI downloads the NintendoSDK from the Nintendo server, and then extracts and installs the necessary files.\nInstalling the NintendoSDK Package\n Info\n You must have Windows Administrator rights to use NDI.\n \tStep \tOperation\n \t1 \t Start NDI and select Dev Environments > Add Environment > Create My Own > Install to Disk.\n →\n →\n \t2 \t In the Connect to Nintendo Server dialog box, enter the following information.\n \t Server: Select Nintendo Developer Portal.\n \t Nintendo Developer ID: Enter the NDID you use when logging in to the Nintendo Developer Portal.\n Now click Connect to open the Web Credentials dialog box. Enter your password and log in.\n Info\n NDI communicates with the Nintendo Developer Portal because the packages it handles are based on Nintendo Developer Portal permissions.\n \t3 \t Select the Platform and Tool Set as shown in the following image, and then click Next.\n \t4 \t Select the version of the SDK to install and then click Next.\n \t5 \t Enter the path to the directory where the environment will be created, the name of the directory (environment name), and click Next.\n Info\n The NintendoSDK is installed in this directory.\n To install multiple versions or installation package types of the NintendoSDK, you can create multiple directories.\n Info\n False Positives From Antivirus Software\n When installing various NintendoSDK packages, NintendoSDK files can be detected incorrectly as viruses by antivirus software.\nWhen such false positives occur, exclude the NintendoSDK install destination folder from the virus scan, and try installing again.\n \t6 \t Select the bundle of packages that best matches your needs and click Next.\n If you select Go to Detailed Package Management Instead at the bottom of the screen, you can instead choose which packages to install.\n \t7 \t Check the type and version of the package to be installed. If there are no issues, click Install. Download and installation begins.\n →\n \t8 \t USB driver installation is sometimes verified during NintendoSDK installation.\n Install the USB driver at this time because it will be used in features that will be added in future releases.\n \t9 \t On the final screen of the NintendoSDK installation, click Finish.\n Click OK to start the NintendoSDK management screen that allows options in the installed environment to be listed.\nThe NintendoSDK management screen is used in later procedures, so leave it running.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766887.html","6 Initializing the ADEV",
"\t\t\n6 Initializing the ADEV\nTurning the ADEV On\nPress the POWER Button on the top of the ADEV console.\nIf the ADEV is off and you connect it to a PC, the power turns on automatically.\n Note\n The ADEV must be sufficiently charged in advance. We recommend charging for at least an hour.\n If the battery runs low during initialization, the update might fail.\nConnecting the ADEV to a PC\nConnect the USB charging cable to the PC's USB port and the USB Type-C terminal on the bottom of the ADEV console.\n Note\n Do not use the Relay Box-A during initialization.\n If the Relay Box-A is used during initialization, the update might fail.\n The USB driver might update when the ADEV is connected to the PC.\n When the ADEV is connected to a PC, wait for a while after turning on the ADEV's power.\n If the USB driver is updated during initialization, the update might fail.\nInitializing the ADEV\nInitialize the ADEV firmware using the dedicated tool. (This process usually takes about five minutes.)\n Info\n Warning messages about the Windows Firewall are displayed several times during this process. Select Allow access.\n \tStep \tOperation\n \t1 \t Note the code written on the sticker applied to the back of the stand.\n (Enter the ADEV serial number in the \"XXXXXXXXXXXXXXX\" part of the following image.)\n Info\n The serial number is used to select the ADEV in step 3.\n \t2 \t On the NintendoSDK management screen, click Initialize the ADEV.\n Info\n To display the NintendoSDK management screen, from the Nintendo Dev Interface Welcome screen, select Dev Environments > Manage.\n \t3 \t Select the ADEV you want to initialize and begin initialization.\n From the list of connected ADEV units shown in 1. Select ADEV actual equipment, click to select the one with the Serial value that matches the serial number you noted in step 1.\n Under 2. Select firmware variation, in the combo box, select the firmware version to use.\n Info\n We strongly recommend selecting the firmware that was initially suggested, without any changes.\n Before selecting + Prod or + ProdWithLog, read NintendoSDK Documents > Guide to Setting Up the Environment > More Information > Firmware That Approximates Retail Hardware > Initialization for PROD MODE.\n Next, to start ADEV initialization, in 3. Start ADEV initialization, click Start initialization.\n Info\n When the ADEV console is in safe mode, an entry that reads (Safe Mode) appears in the Name column.\n To start initialization, select that entry and click Start initialization.\n Info\n The log pauses for 80 to 90 seconds during this process. Wait for the log to resume.\n The process may have failed if the log does not resume after several minutes.\n Info\n If the ADEV console you want to initialize does not appear on the ADEV connection list even after restarting and clicking Re-Scan, something might be wrong with the ADEV. For more information, see 6.1 When ADEV Initialization Fails.\n \t4 \t If Success is displayed in the lower left of the log window, click Exit to close the tool.\n Info\n Fan Operating Noise\n While executing step 3, the cooling fan inside the ADEV starts running.\nThe fan is somewhat noisy, but that does not mean the unit is malfunctioning.\n Info\n For more information about the setup, see NintendoSDK Documents > Guide to Setting Up the Environment > More Information > Other Information About Setting Up the Development Hardware.\n Info\n A sample has been built to check whether the ADEV was initialized correctly.\n Run the sample as follows.\n \tOn the NintendoSDK management screen, click Run Sample.\n \tA logo like the following is displayed if the ADEV was initialized correctly and VSI for NX was installed correctly.\n Note: This sample does not exit automatically. Return to the Menu screen with the HOME Button.\nTroubleshooting\nIf ADEV initialization fails or the console you want to initialize is not on the ADEV connection list, see 6.1 When ADEV Initialization Fails and try initializing several more times.\nIf initialization is still unsuccessful, contact Nintendo support.\nADEV Drivers\nADEV drivers must be installed for a PC to recognize the ADEV.\nIn most cases, the ADEV device driver is installed automatically when you use NDI to install NintendoSDK. However, automatic installation sometimes fails depending on the environment.\nUse the following procedure to confirm whether the ADEV device drivers are installed.\n \tTurn the ADEV on and connect it to the PC with a USB cable.\n \tOpen Device Manager on the PC.\n \tVerify that the NintendoSdkDebugger or NintendoSDK DevKit is shown in Device Manager.\nIf the ADEV device drivers are not installed, use the following procedure to install the drivers manually.\n \tIn the NintendoSDK folder, go to Installers/DevkitDriver and run dpinst.exe.\nThe procedure is now complete.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766909.html","6.1 When ADEV Initialization Fails",
"\t\t\n6.1 When ADEV Initialization Fails\nFactors such as the ADEV status can cause initialization to fail.\n \tInitialization fails.\n \tThe ADEV console you want to initialize does not appear (or it no longer appears) on the ADEV connection list in InitializeAdevWin.\nIf this happens, verify the following.\nYou are using InitializeAdev.exe (or InitializeAdevWin.exe).\nWe recommend directly calling InitializeAdev.exe or InitializeAdevWin.exe.\nThe following files also call these functions directly.\n \t%NINTENDO_SDK_ROOT\\InitializeAdev.bat\n \t%NINTENDO_SDK_ROOT\\Tools\\CommandLineTools\\DevKitSetup.bat\n \t%NINTENDO_SDK_ROOT\\Tools\\CommandLineTools\\DevKitSetup.ps1\nVerifying the Specified Parameters\nIf you are using the InitializeAdev.exe command-line tool, verify that the specified parameters match. (The serial number works with or without a check digit.)\nVerifying Whether the Version Has Restrictions\nFirmware version 13.0.0-3.0 and later can be used for ADEV. If you try to initialize the system with an earlier version of the firmware, it fails during the process.\nRepeating Initialization\nSometimes initializing the ADEV several times results in success. Try to initialize again.\nFully Charging the ADEV Console\nTry to perform initialization after fully charging the ADEV console.\nTo charge the device you must attach the AC adapter. You cannot charge simply by connecting the device to a PC with a USB cable.\nReconnecting the USB Cable and Turning the Power On\nTry initializing the ADEV console again after reconnecting the USB cable and turning the power on.\nIf initialization is particularly unsuccessful, reconnect the USB cable with the following procedure.\n \tDisconnect the USB cable from the ADEV system.\n \tHold down the POWER Button on the upper left of the ADEV console for approximately 12 seconds to turn the power off.\n \tReconnect the USB cable to the ADEV console while the power is off.\n \tThe ADEV turns on automatically when it is connected. Try initialization again.\nIf you are using the device connected to a Relay Box-A, try connecting it directly to the PC without using the relay box.\nExiting Target Manager If It Is Running\nExit Target Manager if it is running, and then try to initialize ADEV.\nSometimes Target Manager stays in the system tray, so also check there.\nVerifying the ADEV Console Is Recognized by Device Manager\nVerify that the ADEV is recognized as a USB device in Device Manager.\nFor more information, see 6 Initializing the ADEV > ADEV Drivers.\nManually Activating Safe Mode\nSometimes initialization is successful after activating safe mode.\n Info\n Safe mode is a mode that runs with minimum features.\n Use safe mode in the following situations.\n \tThe console is not operating properly and must be restored.\n \tADEV initialization fails.\n \tThe ADEV is not detected when it is initialized.\n \tThe power is on but the system menu does not appear.\n Safe mode can be activated with user operations.\n After safe mode is activated, you may not be able to start in normal mode until the EDEV is initialized, so we recommend using safe mode only when you must restore or initialize.\nProcedures for Entering Safe Mode\nThere are two ways to enter safe mode.\n(Method 1) With Joy-Con (R) Attached\n We recommend this method.\n \tHold down the POWER Button (for approximately 12 seconds) and turn off the ADEV console with the USB cable connected. (The system restarts after the button is held down for 20 seconds, so do not go much longer than 12 seconds.)\n \tAttach the Joy-Con (R) to the ADEV console. (Do not attach the Joy-Con (L).)\n \tPress the POWER Button while holding down the volume down button.\n \tTo check whether safe mode is running, see Method for Verifying Whether the System Has Entered Safe Mode. If the system did not enter safe mode correctly, particularly when the menu screen is displayed, restart the process from step 1.\n(Method 2) Without Joy-Con Attached\n \tHold down the POWER Button (for approximately 12 seconds) and turn off the ADEV console with the USB cable connected. (The system restarts after the button is held down for 20 seconds, so do not go much longer than 12 seconds.)\n \tPress the buttons on the upper left of the console in the following order.\n\tPress the POWER Button while holding down the volume down button.\n\tWhile holding down the POWER Button, release the volume down button and press the volume up button.\n\tWhile holding down the volume up button, release the POWER Button.\n\tRelease the volume up button.\n \tTo check whether safe mode is running, see Method for Verifying Whether the System Has Entered Safe Mode. If the system did not enter safe mode correctly, particularly when the menu screen is displayed, restart the process from step 1.\n Info\n Could Not Enter Safe Mode\n For cases where the system enters the standard startup sequence and displays the menu despite attempting to enter safe mode, sometimes adjusting the intervals between button operations will fix the issue. (This is because some operations may not be detected if the intervals between button operations is too fast.)\n As a guide, try using an interval of 0.6 seconds. This interval is equivalent to 4 beat intervals at 100 beats per minute (BPM). We recommend searching for a video with \"BPM=100\" that you can use as a guide.\nVerifying Whether the System Has Entered Safe Mode\nUse the following procedure to verify whether the system has entered safe mode.\n \tIn InitializeAdevWin.exe, click Re-Scan to display the systems that are in safe mode in the list of connected systems.\n \t NX DevKit Safe Mode is displayed for four seconds on the ADEV screen immediately after startup. (Nothing is displayed afterward that point.)\nUsing USB 2.0 When USB 3.0 Connection Fails\nADEV setup may fail depending on the compatibility with the USB 3.0 controller.\nTry the following.\n \tUpdate the USB 3.0 controller driver to the latest version.\n \tUpdate the USB 3.0 controller firmware to the latest version. (Sometimes this firmware is not publicly available.)\n \tRun setup by connecting the device to a USB 2.0 port.\nSetup has been confirmed to fail when using a PC with the following USB 3.0 controller.\n \tRenesas Electronics USB 3.0 Host Controller\nContacting Support\nIf initialization is unsuccessful after attempting these procedures, contact Nintendo support.\nWhen contacting support, the process will be smoother if you include the following information.\n \tSerial number of the ADEV unit\n \tSDK/FW version\n \tInitialization log\tFor InitializeAdevWin, copy the log that appears in the log window to a text file and send in the text file.\n\tFor InitializeAdev, execute a log with the --verbose option added and save it to a file.\n \tAll of the data under the %USERPROFILE%\\AppData\\LocalLow\\Nintendo directory for the PC (and user) that encountered this symptom.\tInformation such as the time of initialization is stored in this folder.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766913.html","7 Setting up the Joy-Con",
"\t\t\n7 Setting up the Joy-Con\nUpdating the Joy-Con Firmware\nRequired Tools\n \tUpdating the Controller Firmware\nUpdateControllerFirmware.bat in the NintendoSDK folder\nThis tool is for updating the Nintendo Switch™ controller firmware.\nStep\n \tStep \tOperation\n \t1 \t Start the controller firmware update tool.\nExecute the UpdateControllerFirmware.bat file in the NintendoSDK folder.\n \t2 \t Pair the Joy-Con to the ADEV.\nPress the SYNC Button on the Joy-Con.\n The connected Joy-Con controllers are listed in Connected controllers.\n Note\n The Joy-Con firmware must be 3.48.x.x or later to update the firmware by connecting to the rails on the console.If the firmware is earlier than version 3.48.x.x, connect the Joy-Con wirelessly to update the firmware.\n If the Joy-Con batteries are low, recharge them first using the console rail or the Joy-Con charging grip.\n \t3 \tSimultaneously press the L Button and ZL Button or the R Button and ZR Button on the Joy-Con and then release them.\nThe firmware update starts when the buttons are released.\n \t4 \t The firmware is updated.\nDuring the firmware update, do not connect controllers that are connected via Bluetooth to the rails, or remove controllers that are currently connected to the rails.\n During the Joy-Con (R) update, the Joy-Con is restarted once.\nWhen the Joy-Con restarts, it automatically reconnects to the console. However, the connection might fail on rare occasions due to the signal status.\nIf reconnection fails, press any button on the Joy-Con and reconnect manually. The update resumes after reconnection.\n \t5 \t When the firmware update completes, \"Firmware update completed\" is displayed on the screen.\nThe updated Joy-Con is disconnected from the ADEV.\n Note\n Depending on the signal strength, the update might fail and display the \"Verify error occurred\" message.\n If the update fails, try performing the update again.\n \tNotes \t Controller firmware updates can be performed consecutively. To update a different controller, repeat the procedure from step 2.\n When the firmware update is finished, restart the ADEV. (Restarting will not be required with future SDKs.)\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766921.html","8 Building and Running Applications (For Developers)",
"\t\t\n8 Building and Running Applications (For Developers)\nSummary\nThe steps to build and run libraries and applications for NintendoSDK are the same as for normal Visual C++ projects.\nThe NintendoSDK provides a sample application that demonstrates the build and run methods.\nLocation of Sample Programs\nSample programs are in the NintendoSDK Samples package.\nWhen the NintendoSDK Samples package is installed, the sample programs are placed in NintendoSDK\\Samples\\Sources\\Applications.\nBuilding NX Applications\nThe following description of the build procedure for a sample program uses the GfxPrimitiveRenderer sample as an example.\n \tStep \tOperation\n \t1 \t Open NintendoSDK\\Samples\\Sources\\Applications\\GfxPrimitiveRenderer\\GfxPrimitiveRenderer-spec.NX.autogen.vs2017.sln.\n Info\n The preceding procedure assumes that Visual Studio 2017 is being used.\nIf you are using Visual Studio 2019, open the GfxPrimitiveRenderer-spec.NX.autogen.vs2019.sln file located in the same directory.\n \t2 \t From the Visual Studio Solution Platform, select NX64.\n \t3 \t Select Build > Build Solution.\n Running NX Applications\nThe following description of the execution procedure for a sample program uses the GfxPrimitiveRenderer sample as an example.\n \tStep \tOperation\n \t1 \tBuild a sample program following the procedure in the previous section.\n \t2 \t Verify that NX64 is selected in the Visual Studio Solution Platform.\n \t3 \t In Visual Studio, select Debug > Start Debugging or Debug > Start Without Debugging.\n \t4 \t When Target Manager (described later) starts and the sample is run, the following image is displayed on the ADEV LCD screen.\n Note: Target Manager\nTarget Manager is software for managing the development tools connected to a PC.\nYou can use it to register an ADEV to a PC and run built applications on the ADEV.\nTarget Manager starts automatically when you run an application from Visual Studio on the ADEV.\nIf you are operating the ADEV without using Visual Studio, manually start Target Manager from the Start menu.\n Info\n For more information about the features of the Target Manager, see NintendoSDK Documents > Features > Controlling the Development Hardware > Target Manager.\nNext Steps\nFor the next steps, see NintendoSDK Documents > Tutorial.\nYou can learn about creating NX applications by reading and following the tutorial.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766935.html","9 Installing Applications (For Non-Developers)",
"\t\t\n9 Installing Applications (For Non-Developers)\nInstalling Applications via microSD Card\nYou can install an application by saving its NSP file on a microSD card, and then inserting the card into the development hardware.\n Info\n For more information about creating NSP files, see NintendoSDK Documents > Features > Building > Creating Application Images.\n \tStep \tOperation\n \t1 \t Save the NSP file to a microSD card.\n Note\n If the NSP file is larger than 4 GB, you cannot save the file if you do not use a microSD card that is at least 64 GB.\nIf you are using a microSD card of 32 GB or less, save the file using the following procedure.\n \t2 \tInsert the microSD card into the ADEV.\n \t3 \t In DevMenu, in Application, select Install from SD.\n \t4 \t To install an individual application, select the appropriate NSP file.\n To install all NSP files, select Install All.\n Info\n For more information, see NintendoSDK Documents > Features > Controlling the Development Hardware > DevMenu.\nSaving an NSP File Larger Than 4 GB to a microSD Card of 32 GB or Less\nComplete the following procedure.\n \tStep \tOperation\n \t1 \t Copy the \\Tools\\DivideNsp\\DivideNsp.ps1 and \\Tools\\DivideNsp\\DivideNsp.bat files from the directory where NintendoSDK is installed to the directory in the microSD card where you want to place the NSP file.\n \t2 \tDrag the NSP file you want to save to the DivideNsp.bat file that was copied to the microSD card.\n \t3 \tThe process ends after a directory is created with the same name as the NSP file that you want to save.\n Info\n \tWhen you drag the NSP file you want to save in step 2 and a file with the same name already exists in the directory, an error message is displayed, stating that \"***.nsp cannot be created because a file or directory with the same name already exists.\"\nIf this happens, either delete the pertinent file in advance, or change the directory where the file goes and repeat the procedure.\n \tYou can achieve the same result by using this procedure to save the NSP file and directory of the same name to a place other than an SD card, and then copying them to any directory on the microSD card.\nCONFIDENTIAL\n",0,"en-US"],
["Pages/Page_1137766950.html","10 Running Applications (For Non-Developers)",
"\t\t\n10 Running Applications (For Non-Developers)\nYou can start applications installed on the ADEV console from the DevMenu.\nRunning Installed Applications\n \tStep \tOperation\n \t1 \t Turn on the ADEV console.\n A screen like the following is displayed when the DevMenu is started.\n If this screen is not displayed, from the menu on the left, select Application.\n A list of applications installed on the ADEV console is displayed.\n \t2 \t Tap the application you want to run.\n The selected application starts.\nCONFIDENTIAL\n",0,"en-US"],
];
for (var x = 0; x < additionalData.length; x++) Search.indexData.push(additionalData[x]);
Search.additionalData = additionalData;
})();
Search.enableApiSearch = false;