import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/userContext";
import { account, databases } from "@/lib/appwrite";
import { ID, Query } from "appwrite";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { OnBoardForm } from "../../../components/OnBoardForm";

const OnboardPage = async () => {
    return (
        <>
            <OnBoardForm />
        </>
    );
};

export default OnboardPage;
