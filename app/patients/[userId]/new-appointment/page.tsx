import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import * as Sentry from '@sentry/nextjs';

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
    const patient = await getPatient(userId);

    Sentry.metrics.set("user_view_new-appointment", patient.name);

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <div className="flex items-center mb-10">
                        <div className="aspect-square">
                            <Image
                                src="/assets/icons/logo-icon.svg"
                                height={1000} width={1000} alt="patient"
                                className="h-12 w-fit"
                            />
                        </div>
                        <span className="ml-2 text-2xl leading-none font-bold">MediCare</span>
                    </div>

                    <AppointmentForm
                        type="create"
                        userId={userId}
                        patientId={patient?.$id}
                    />

                    <p className="copyright mt-10 py-12">© 2024 MediCare</p>

                </div>
            </section>

            <Image
                src="/assets/images/appointment-img.png"
                height={1000}
                width={1000}
                alt="appointment"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
}
