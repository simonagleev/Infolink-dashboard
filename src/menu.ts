import { IMenuGroup } from "react-declarative";

import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

export const options: IMenuGroup[] = [
    {
        label: "Dashboards",
        icon: PublicIcon,
        options: [
            {
                label: "Common Data",
                name: '/home-page',
                icon: HomeIcon,
            },
            {
                label: "Profiles list",
                name: '/profiles-list',
                icon: PeopleIcon,
            },
        ]
    },
    {
        label: "System",
        icon: SettingsIcon,
        options: [
            {
                label: 'User Settings',
                name: '/settings',
            },
        ]
    }

];

export default options;