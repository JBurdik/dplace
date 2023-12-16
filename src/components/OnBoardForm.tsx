"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { databases } from "@/lib/appwrite";
import { useUser } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const OnBoardForm = () => {
    const [accountType, setAccountType] = useState<"djs" | "clubs">("djs");
    const [bio, setBio] = useState("");

    const { user } = useUser();
    const router = useRouter();

    const save = async () => {
        if (!user) return alert("Something went wrong");
        try {
            const result = await databases.createDocument("profiles", accountType, user.$id, {
                userId: user?.$id,
                bio: bio,
            });
            if (result.$id) router.push("/");
        } catch (error) {
            alert("Something went wrong");
        }
    };
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Welcome to dPlace</CardTitle>
                <CardDescription>awesome to see you with us!</CardDescription>
                <CardDescription>please fill additional info</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                    <div>
                        <Label className="pl-1">Account Type:</Label>
                        <Select onValueChange={(val: "djs" | "clubs") => setAccountType(val)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="djs">DJ</SelectItem>
                                <SelectItem value="clubs">CLUB</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label className="pl-1">Bio:</Label>
                        <Textarea
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell others about yourself..."
                        />
                    </div>
                    <Button onClick={save} className="w-full">
                        Save info
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
