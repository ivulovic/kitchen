// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { SidenavScope } from "app/containers/SidePanel/constants";
import { ISidenavState } from "app/containers/SidePanel/types";
import { KitchenScope } from "app/pages/KitchenPage/constants";
import { IKitchenState } from "app/pages/KitchenPage/types";
import { AuthProviderScope } from "app/providers/AuthProvider/constants";
import { IAuthProviderState } from "app/providers/AuthProvider/types";

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  [AuthProviderScope]: IAuthProviderState;
  [KitchenScope]: IKitchenState;
  [SidenavScope]: ISidenavState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
