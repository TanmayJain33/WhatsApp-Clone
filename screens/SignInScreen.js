import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import GlobalContext from "../context/Context";
import { signIn, signUp } from "../firebase";

export default function SignInScreen() {
  const {
    theme: { colors },
  } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("SignUp");

  async function handlePress() {
    if (mode == "SignUp") {
      await signUp(email, password);
    }
    if (mode == "SignIn") {
      await signIn(email, password);
    }
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{ color: colors.foreground, fontSize: 24, marginBottom: 20 }}
      >
        Welcome to WhatsApp
      </Text>
      <Image
        source={require("../assets/welcome-img.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          style={{
            padding: 0,
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            marginTop: 20,
            padding: 0,
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ marginTop: 30 }}>
          <Button
            title={mode == "SignUp" ? "Sign Up" : "Sign In"}
            disabled={!password || !email}
            color={colors.secondary}
            onPress={handlePress}
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() =>
            mode == "SignUp" ? setMode("SignIn") : setMode("SignUp")
          }
        >
          <Text style={{ color: colors.secondaryText }}>
            {mode == "SignUp"
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
