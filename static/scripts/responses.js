function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there. How can I help you?";
    } 
    else if (input == "Hello") {
        return "Hello there. How can I help you?";
    } 
    else if (input == "Hi") {
        return "Hi there. How can I help you?";
    } 
    else if (input == "hi") {
        return "Hi there. How can I help you?";
    } 
    else if (input == "Hi there") {
        return "Hi there. How can I help you?";
    } 
    else if (input == "hi there") {
        return "Hi there. How can I help you?";
    } 
    else if (input == "Whats your name") {
        return "My name is AI";
    } 
    else if (input == "whats your name") {
        return "My name is AI, whats your name?";
    } 
    else if (input == "my name is") {
        return "Nice to meet you, How can I help you today?";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "thanks") {
        return "Your welcome";
    } 
    else if (input == "Thanks") {
        return "Your welcome";
    } 
    else if (input == "Thank you") {
        return "Your welcome";
    } 
    else if (input == "thank you") {
        return "Your welcome";
    } 
    else if (input == "thanks for your help") {
        return "It was my pleasure assisting you today.";
    } 
    else if (input == "Thanks for your help") {
        return "It was my pleasure assisting you today.";
    } 
    else if (input == "Thank you for your help") {
        return "It was my pleasure assisting you today.";
    } 
    else if (input == "thank you for your help") {
        return "It was my pleasure assisting you today.";
    }
    else if (input == "How do you create a signature in outlook?") {
        return "1.Select Settings > View all Outlook settings at the top of the page. 2. Select Mail > Compose and reply. 3. Under Email signature, type your signature and use the available formatting options to change its appearance. 4. If you want your signature to appear at the bottom of all new email messages that you compose, select the Automatically include my signature on new messages I compose check box. 5. If you want your signature to appear on messages that you forward or reply to, select the Automatically include my signature on messages I forward or reply to check box. 6. Select Save when you're done.";
    } 
    else if (input == "How to fix a pc that has frozen?") {
        return "To fix a frozen PC, you can try the following methods: 1. Hold down the power button. 2. Start your PC or Mac in Safe Mode. 3. Scan your computer for malware and viruses. 4. Quit programs that might be causing your computer to freeze. If you need further help on this problem say need more help with frozen pc";
    }
     else if (input == "need more help with frozen pc") {
        return "To get further assistance please contact Cyber Connect IT on support@cyberconnectit.com";
    }
    else if (input == "what type of networks are there") {
        return "There are several types of networks, including: 1. Local Area Network (LAN): A LAN is used to connect devices within a small geographical area, such as a home, office, or building. 2. Wide Area Network (WAN): A WAN connects multiple LANs over a larger geographic area, often spanning cities, countries, or even continents. 3. Metropolitan Area Network (MAN): A MAN covers a larger area than a LAN but smaller than a WAN. It typically connects multiple LANs within a city or metropolitan area. 4. Personal Area Network (PAN): A PAN is a network used for communication between personal devices, typically within a short range, such as Bluetooth connections between smartphones and headphones. 5. Campus Area Network (CAN): A CAN is a network that connects multiple buildings within a university campus or corporate office complex. 6. Storage Area Network (SAN): A SAN is a dedicated network used to connect storage devices, such as hard drives or solid-state drives, to servers, enabling centralized storage and access. 7. Virtual Private Network (VPN): A VPN allows for secure data transmission over a public network by establishing a private encrypted connection. 8. Wireless Local Area Network (WLAN): A WLAN is a wireless variant of a LAN that uses radio waves to connect devices, eliminating the need for physical cables. 9. Cellular Network: Cellular networks are used for mobile communication and connect devices such as smartphones, tablets, and other cellular-enabled devices using cellular towers. 10. Satellite Network: Satellite networks utilize communication satellites to provide connectivity in remote areas where traditional terrestrial networks might be limited or unavailable. 11. Internet: The internet is a massive global network that connects millions of computers worldwide, allowing for communication, information sharing, and online services. These are just a few examples, and there are various other types of networks designed for specific purposes or applications.";
    } 
    else if (input == "What kind of servers are there") {
        return "There are several types of servers, including: 1. File servers: These servers store and manage files and data for clients or users on a network. 2. Web servers: These servers host websites and enable communication between the website and the users' web browsers. 3. Application servers: These servers run and manage applications, handling tasks such as application deployment, data synchronization, and load balancing. 4. Database servers: These servers host and manage databases, allowing users or applications to access and manipulate data stored in the database. 5. Mail servers: These servers handle incoming and outgoing emails, managing email accounts, and facilitating email communication. 6. DNS servers: These servers translate domain names into IP addresses, helping users access websites by simply typing in a domain name rather than the IP address. 7. Proxy servers: These servers act as intermediaries between clients and other servers, helping to increase performance, security, and privacy while browsing the internet. 8. Game servers: These servers host online multiplayer games, allowing players to connect, interact, and play together in real-time. 9. Virtual servers: These servers are created by partitioning a physical server into multiple virtual machines. Each virtual server acts like an independent server with its own operating system and resources. 10. Print servers: These servers manage print requests and enable networked printers to be shared by multiple users. These are just a few examples, and there are many other types of servers designed to serve different purposes within a networked environment.";
    } 

    else if (input == "what kind of network switches are there") {
        return "There are various types of network switches, including: 1. Unmanaged Switches: Basic switches that do not require any configuration. They are typically used in small home or office networks. 2. Managed Switches: These switches can be configured and offer features such as VLANs (Virtual Local Area Networks), QoS (Quality of Service), and security settings. They are commonly used in larger networks. 3. Layer 2 Switches: These switches operate at the data link layer (Layer 2) of the OSI (Open Systems Interconnection) model and make forwarding decisions based on MAC (Media Access Control) addresses. 4. Layer 3 Switches: These switches operate at the network layer (Layer 3) of the OSI model and can perform IP routing in addition to the functions of a Layer 2 switch. 5. PoE (Power over Ethernet) Switches: These switches provide power to connected devices such as IP phones, wireless access points, and IP cameras, eliminating the need for separate power supplies. 6. Modular Switches: These switches offer flexibility and scalability by allowing you to add or remove modules for different types of interface connections. 7. Stackable Switches: These switches can be physically stacked together and managed as a single unit, reducing the complexity of managing multiple switches. 8. Gigabit Ethernet Switches: These switches support Gigabit Ethernet speeds, which offer significantly faster data transfer rates than standard Fast Ethernet switches. 9. Fiber Optic Switches: These switches use fiber optic cables to transmit data over longer distances compared to traditional Ethernet switches using copper cables. They are commonly used in environments where high bandwidth and long-distance connectivity are required. 10. Data Center Switches: These switches are designed specifically for data center environments with high-performance requirements, low-latency, and large-scale connectivity. These are just some of the common types of network switches, and there are many other specialized switches available for specific network requirements.";
    } 

    else if (input == "can you tell me how i can insert an image on to an email") {
        return "Sure! Here's how you can insert an image into your email: 1. Open your email application or website and start composing a new email. 2. Look for an option or icon related to inserting an image. It is typically represented by a picture icon or the words Insert Image. 3. Click on the image icon or select the Insert Image option. 4. A new window or dialog box will appear, prompting you to select the image you want to insert. 5. Browse through your device's folders or files to locate the image you want to use. Select the image and click on Insert, Open, or a similar command, depending on the email service you are using. 6. Wait for the image to upload and insert into the email. This may take a few seconds, depending on the image size and your internet connection speed. 7. Once uploaded, you may be able to resize the image or adjust its placement within the email by clicking and dragging on it if the option is available. 8. It's a good idea to include alternative text for the image. This text will appear if the recipient's email client cannot display the image or if they have disabled image loading. Look for an option labeled Alternative Text or similar, and enter a brief description or relevant text for the image. 9. Continue composing your email, adding text or additional images if desired. 10. Once you have finished composing your email, you can add recipients, subject, and any other necessary details before sending it. Remember, email applications and websites can vary slightly, so the specific steps may differ depending on the platform you're using.";
    }
    else if (input == "how can i print from a macbook") {
        return "To print from a MacBook, you can follow the steps below: 1. Ensure that your MacBook is connected to a working printer either through a USB cable or on the same network. 2. Open the document, image, or file that you want to print. 3. Click on the File option in the top menu bar, usually located in the top-left corner of the screen. 4. From the drop-down menu, select Print, or you can use the keyboard shortcut Command + P 5. The Print dialog box will appear, displaying various printing options. 6. Choose your desired printer from the Printer drop-down menu. If your printer is connected and set up correctly, it should appear in the list. You may need to install the necessary printer drivers if you haven't already. 7. Specify the number of copies you want to print, and select any additional settings such as paper size, orientation, or color options. 8. Preview the document by clicking on the Preview button if you wish. 9. Once you have reviewed and set your desired print options, click on the Print button to start printing. Note: The exact options and steps may vary slightly based on the macOS version and the printer you are using.";
    } 
    else {
        return "Try asking something else!";
    }
}
