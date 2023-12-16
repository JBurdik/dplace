"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserContext, useUser } from "@/contexts/userContext";
import { account } from "@/lib/appwrite";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SignPage = () => {
    const { user, signin, signup } = useUser();
    const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
    const [email, setEmail] = useState("");
    const [name, setName] = useState({ firstName: "", surname: "" }); // [firstName, lastName
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<boolean>(false);
    const router = useRouter();

    // const signUp = async () => {
    //     await account.create(ID.unique(), email, password, `${name.firstName} ${name.surname}`);
    //     setActiveTab("signin");
    //     setEmail("");
    //     setPassword("");
    //     setPasswordConfirmation(false);
    //     setName({ firstName: "", surname: "" });
    // };
    // const signIn = async () => {
    //     await account.createEmailSession(email, password);
    //     setUser(await account.get());
    // };

    useEffect(() => {
        if (user !== null) router.push("/");
    }, [user, router]);

    return (
        <Tabs defaultValue="signin" value={activeTab} className="w-[400px]">
            <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="signin" onClick={() => setActiveTab("signin")}>
                    Sign in
                </TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setActiveTab("signup")}>
                    Sign up
                </TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-4 justify-center">
                                <div className="flex flex-col gap-2">
                                    <Label className="pl-1">Email:</Label>
                                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label className="pl-1">Password:</Label>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Button onClick={() => signin(email, password)} className="mt-4 w-full">
                                Sign in
                            </Button>
                        </form>
                        <div className="flex items-center justify-center gap-2 my-4">
                            <Separator decorative className="my-4 w-16" />
                            <h4 className="text-xs">OR</h4>
                            <Separator className="my-4 w-16" />
                        </div>
                        <div>
                            <Button variant="outline" size="default" className="w-full">
                                Sign in with Google
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="signup">
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-4 justify-center">
                                <div className="flex flex-col gap-2">
                                    <Label className="pl-1">Full name:</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="First name"
                                            type="text"
                                            onChange={(e) => setName({ ...name, firstName: e.target.value })}
                                        />
                                        <Input
                                            placeholder="Surname"
                                            type="text"
                                            onChange={(e) => setName({ ...name, surname: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="pl-1">Email:</Label>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label className="pl-1">Password:</Label>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="pl-1">Password confirmation:</Label>
                                    <Input
                                        placeholder="Password confirmation"
                                        type="password"
                                        onChange={(e) => {
                                            e.target.value === password
                                                ? setPasswordConfirmation(true)
                                                : setPasswordConfirmation(false);
                                        }}
                                    />
                                </div>
                            </div>
                            <Button
                                onClick={() => signup(email, password, `${name.firstName} ${name.surname}`)}
                                className="mt-4 w-full"
                                disabled={!passwordConfirmation}
                            >
                                Sign up
                            </Button>
                        </form>
                        <div className="flex items-center justify-center gap-2 my-4">
                            <Separator decorative className="my-4 w-16" />
                            <h4 className="text-xs">OR</h4>
                            <Separator className="my-4 w-16" />
                        </div>
                        <div>
                            <Button variant="outline" size="default" className="w-full">
                                Sign in with Google
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default SignPage;
