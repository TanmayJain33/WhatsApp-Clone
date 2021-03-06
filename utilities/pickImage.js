import * as ImagePicker from "expo-image-picker";

export async function pickImage() {
  let result = await ImagePicker.launchCameraAsync();
  return result;
}

export async function askForPermission() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  return status;
}
