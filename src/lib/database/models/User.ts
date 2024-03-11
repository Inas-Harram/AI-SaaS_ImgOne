import { UserSchema } from "./user.model";

export const User = models?.User || model("User", UserSchema);
