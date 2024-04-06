let typeofPackage = "overnight";


switch (typeofPackage) {
    case "standard":
        console.log("Your Package will be delivered in next 3-5 days");
        break;

        case "express":
        console.log("Your Package will be delivered in next 1-2 days");
        break;

        case "overnight":
        console.log("Your Package will be delivered by tommorrow");
        break;

    default:
        console.log("Invalid package type!!");
        break;
}

