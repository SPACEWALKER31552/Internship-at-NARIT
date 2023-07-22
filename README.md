# Internship-at-NARIT
This respository is about my internship project at NARIT during June 2022- July 2022 which contain of 2 projects.

1.The .Net Maui Application for controlling power switch
  The first project is about designing and creating an application that act as one of the working node in the system and can communicating with all other node.
  Which the main propose is to reduce the time,resource,accident that can cause by the process of open the electrical system manually inside the observatory dome.
  For the operator or the engineer that need to work inside of the dome,they can just change the state of the power switch through this application.By log in with 
  the authorized IP and Password,the connection is created and can be able to monitor and command the PLC controlling the power switch.However,the protocol that use 
  in this project is the secret of the NARIT engineering team developed by the team 's member or my mentor at that time.More of the function of this application is     planned for the better use and convinient.

  <p align="center">
    <img src="![PAGE 1page1](https://github.com/SPACEWALKER31552/Internship-at-NARIT/assets/109845426/0f957a6d-3093-4b21-9f2e-3a61c681192c)" width="*" >
  </p>


2.The Observatory Dome Position Tracker
  The second project is about to design the module which help to monitor the observatory dome 's position.The reason is that at back then they can only know of 2 
  position of the dome (Fully Open and Fully Close) or in short they only had the limit switches at the only maximum position.So that between the process of opening 
  of closing they couldn't know the exact position of it.That's why these project had started developing.Which the best way to track the moving part of the dome is     to detect the change in velocity,accerelation, and the degree of it by using the IMU sensor.And the calibrate it in between the fully open position and fully  
  closing position and then mapped those value into the 0-100% scale and sent it back to the server.The hardware consists of very few equipment.Node MCU esp 32 and  
  MPU6050 is represented in these project which the esp32 was powered by the micro usb cable.Then special point of this project is how the data is transport from 
  where the module is placed to the server.Using the node js. integrate into the esp32 acting as the publisher node that send data every certain time to the 
  subsriber node located in the server.Plus integrating the socket IO and Protobuffer protocol to minimize the data size and transfer time to the max level.The data 
  that monitored in the server room is real time  is used to produce the UI show in the main control room for the presentative of the data.
