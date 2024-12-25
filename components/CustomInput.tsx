import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Control, FieldPath, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

type CustomInput = {
    control: Control <z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof  formSchema>>,
    label: string,
    placeholder: string,
};

export default function CustomInput({ control, name, label, placeholder }: CustomInput) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });


    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className="input-class"
                                type={name === 'password' ? 'password' : 'text'}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    );
}
